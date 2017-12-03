class Admin::UserRoleRelation < ApplicationRecord
    belongs_to :admin_users, :class_name => 'Admin:User', foreign_key: "user_id"
    belongs_to :admin_roles, :class_name => 'Admin:Role', foreign_key: "role_id"
end