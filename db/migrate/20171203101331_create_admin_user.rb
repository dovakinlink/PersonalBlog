class CreateAdminUser < ActiveRecord::Migration[5.0]
  def change
    create_table :admin_users do |t|
      t.string :code, :comment => "用户编号"
      t.string :username, :comment => "用户名"
      t.string :account, :comment => "账户"
      t.string :password, null: false, default: ""
      t.integer :state, :comment => "用户状态 1:正常 2:冻结 3:注销"
      t.timestamps
    end
  end
end
