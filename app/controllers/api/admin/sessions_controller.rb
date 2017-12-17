class Api::Admin::SessionsController < Api::BaseController
    
    # 登录 
    def create
        @user = ::Admin::User.find_by(:account => session_params[:account])
        api_render({:message => "用户不存在",:success => false, :code => 1}) && return if @user.blank?
        # api_error({:message => "密码错误", :code => 1}) && return if @user.password(session_params[:password])
        api_error({:message => "密码错误",:success => false, :code => 1}) && return if @user.password != session_params[:password]
        api_error({:message => "用户已冻结",:success => false, :code => 1}) && return if @user.state == 2
        if SessionCreateService.call(@user,{})
            # 记录登录日志
            ::Admin::UserLog.create({:user_id => @user.id, :username => @user.username, :ip => request.remote_ip})
            api_render({:message => '登录成功', :states => 200, :sucess => true, :user => user_json})
        end
    end

    private

    def session_params
        params.require(:user).permit(:account, :password)
    end

    def user_json
        @user.as_json(:only=>[:id,:username,:code,:account,:authentication_token])
    end
end