class CreateAdminUserLog < ActiveRecord::Migration[5.0]
  def change
    create_table :admin_user_logs do |t|
      t.string :ip, :comment => "登录ip"
      t.integer :user_id, :comment => "用户ID"
      t.string :username, :comment => "用户名称"
      t.timestamps
    end
  end
end
