class ChangePasswordToAdminUser < ActiveRecord::Migration[5.0]
  def change
    change_table :admin_users do |t|
      t.rename :password, :password_hash
    end
  end
end
