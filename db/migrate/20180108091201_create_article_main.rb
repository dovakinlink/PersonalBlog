class CreateArticleMain < ActiveRecord::Migration[5.0]
  def change
    create_table :article_mains do |t|
      t.string :no, :comment => '文章编号'
      t.string :title, :comment => '文章标题'
      t.string :author, :comment => '作者名称'
      t.string :author_id, :comment => '作者用户id'
      t.integer :content_id, :comment => '文章正文关联id'
      t.integer :comment_id, :comment => '评论关联id'
      t.integer :good, :comment => '赞'
      t.integer :bad, :comment => '踩'

      t.timestamps
    end
  end
end
