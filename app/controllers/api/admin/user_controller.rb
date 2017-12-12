class Api::Admin::UserController < ApplicationController
    
    before_action :set_user, only: [:create]

    def create
        # 验证手机号/邮箱是否已注册
        account = params[:user][:account]
        if account.present?
            ::Admin::User.find_by(:account => account)
        end
    end

    private

    def user_params
        params.require(:user).permit(::Admin::User.attribute_names, :password)    
    end

    def set_user
    end
end
