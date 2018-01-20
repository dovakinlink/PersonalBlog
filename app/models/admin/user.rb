require 'bcrypt'

class Admin::User < ApplicationRecord
    include BCrypt

    # mount_uploaders :avatar, FileUploader

    has_many :admin_user_role_relations, :class_name => 'Admin::UserRoleRelation', foreign_key: "user_id"
    before_create :generate_authentication_token

    scope :by_code, ->(code) {
        where(:code => code) if code.present?
    }

    scope :by_username, ->(username) {
        where("username like ? ", username) if username.present?
    }

    scope :by_account, ->(account) {
        where("account like ? ", account) if account.present?
    }
    
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