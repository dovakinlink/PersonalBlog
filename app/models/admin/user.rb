require 'bcrypt'

class Admin::User < ApplicationRecord
    include BCrypt
    has_many :admin_user_role_relations, :class_name => 'Admin::UserRoleRelation', foreign_key: "user_id"

    def password
        @password || = Password.new(password_hash)
    end

    def password=(new_password)
        @password = Password.create(new_password)
        self.password_hash = @password
    end
end