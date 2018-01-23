class AddHtmlContentToArticleContent < ActiveRecord::Migration[5.0]
  def change
    add_column :article_contents, :htmlcontent, :text
  end
end
