require 'bcrypt'

class Admin::User < ApplicationRecord
    include BCrypt
    has_many :admin_user_role_relations, :class_name => 'Admin::UserRoleRelation', foreign_key: "user_id"
    before_create :generate_authentication_token
    
    def password
        @password ||= Password.new(password_hash)
    end

    def password=(new_password)
        @password = Password.create(new_password)
        self.password_hash = @password
    end

    # def password(comp_password)
    #     binding.pry
    #     input_password = Password.new(password)
    #     input_password != comp_password
    # end
    def generate_authentication_token
        loop do
          self.authentication_token = SecureRandom.base64(64)
          break if !Admin::User.find_by(authentication_token: authentication_token)
        end
    end
end