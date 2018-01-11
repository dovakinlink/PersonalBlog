class AuthenticationService
    include Serviceable
    attr_reader :user

    def initialize(user, params)
        @user = user
        @params = params
    end

    def call
        begin
            result = $redis.mapped_hmget("_pb_session:#{@user[:authentication_token]}","access_time",
                "authentication_token","account")
        rescue => exception
            return false
        end
        return false if result["access_time"].nil? || result["authentication_token"].nil?
        if (Time.now.to_i - result["access_time"].to_time.to_i) >= Rails.application.config.token_expires
            return false
        end
        return true
    end
end