class CreateAdminUserRoleRelation < ActiveRecord::Migration[5.0]
  def change
    create_table :admin_user_role_relations do |t|
      t.string :user_id, :comment => "用户id"
      t.string :role_id, :comment => "角色id"
      t.timestamps
    end
  end
end
