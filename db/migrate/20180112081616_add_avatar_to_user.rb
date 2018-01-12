class AddAvatarToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_users, :avatar, :string
  end
end
