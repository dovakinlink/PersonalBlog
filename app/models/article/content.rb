class Article::Content < ApplicationRecrod
    belongs_to :article_main, class_name: 'Article::Main', foreign_key: 'article_id'
end