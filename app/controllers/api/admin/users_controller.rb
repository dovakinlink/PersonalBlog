class Api::Admin::UsersController < ::Api::BaseController
    
    before_action :set_user, only: [:create]

    def create
        account = params[:user][:account]
        if account.present?
            # 验证手机号/邮箱是否已注册
            existUser = ::Admin::User.find_by(:account => account)
            api_error({:message => '用户名已存在',:code => 1}) && return if existUser.present?
            # 新建用户
            user = ::Admin::User.new(user_params)
            # 存储密文密码
            user.password = params[:user][:password]
            # TODO 暂时不考虑头像上传
            user.avatar = "http://localhost:3000/uploads/avatar/" + avatar_params
            user.code = Utils::Redis.get_code_length_year(5,"YH")
            user.state = 0
            begin
                ::Admin::User.transaction do
                    user.save!
                end
            rescue => exception
                api_error({:message => "exception info: #{exception.message}", :code => -1})
            else
                api_success({:message => "注册成功", :code => 0})
            end
        end
    end



    private

    def user_params
        params.require(:user).permit(::Admin::User.attribute_names, :password)    
    end

    def avatar_params
        # flies = []
        # if params[:files].present?
        #     params[:files].each do |iten|
        #         file = item.permit(:name,:size,:type,:uid,:url)
        #         files.push(file)
        #     end
        # end
        # return files
        params.require(:avatar)
    end

    def set_user
    end
end
