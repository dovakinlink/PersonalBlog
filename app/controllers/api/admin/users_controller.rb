class Api::Admin::UsersController < ::Api::BaseController
    
    before_action :set_user, only: [:create]

    def index
        @users = ::Admin::User.order('created_at desc')
        @users = @users.by_code(params[:code])
                    .by_username(params[:username])
                    .by_account(params[:account])

        respond_to do |format|
            format.json do
                @total = @users.count
                @users = @users.page(params[:page]).per(params[:pageSize])
            end
        end
        
    end

    def destroy
        begin
            @user = ::Admin::User.find(params[:id])
            if @user
                ::Admin::User.transaction do 
                    @user.destroy!
                end
                api_success({message: '删除成功', status: 200, success: true })
            end
        rescue => exception
            api_error({message: e.message,status: 200,success: false})
        end
    end

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
