class AddTokenToAdminUser < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_users, :authentication_token, :string
  end
end
