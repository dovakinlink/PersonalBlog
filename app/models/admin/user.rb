class Admin::User < ApplicationRecord
    has_many :admin_user_role_relations, :class_name => 'Admin::UserRoleRelation', foreign_key: "user_id"
end