module Admin
    class Setting
        def self.current=(user)
            Thread.current[:user] = user
        end

        def self.current_user
            Thread.current[:user]
        end

        def self.current_ip=(ip)
            Thread.current[:ip] = ip
        end

        def self.current_ip
            Thread.current[:ip]
        end
    end
end