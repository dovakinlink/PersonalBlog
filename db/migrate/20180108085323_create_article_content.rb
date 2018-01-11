class CreateArticleContent < ActiveRecord::Migration[5.0]
  def change
    create_table :article_contents do |t|
      t.string :no, :comment => '正文编号'
      t.integer :article_id, :comment => '关联文章id'
      t.text :content, :comment => '正文内容'
      
      t.timestamps
    end
  end
end
