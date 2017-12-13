class SessionCreateService
    include Serviceable
    attr_reader :user

    def initialize(user, params)
        @user = user
        @params = params
    end

    def call
        $redis.mapped_hmset("_pb_session:#{user_hash[:authentication_token]}",user_hash)
        $redis.expire("_pb_session:#{user_hash[:authentication_token]}",Rails.application.config.token_expires)
        $redis.mapped_hmget("_pb_session:#{user_hash[:authentication_token]}","authentication_token").present?
    end

    private
    def user_hash
        hash={}
        [:id,:code,:username,:account,:authentication_token].each do |attr|
            hash[attr] = @user[attr]
        end
        hash[:access_time] = Time.now
        hash
    end
end