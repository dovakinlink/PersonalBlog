class CreateAdminRole < ActiveRecord::Migration[5.0]
  def change
    create_table :admin_roles do |t|
      t.string :code, :comment => "角色代码"
      t.string :title, :comment => "角色名称"
      t.timestamps
    end
  end
end
