class Article::Content < ApplicationRecord
    # belongs_to :article_mains, class_name: 'Article::Main', foreign_key: 'content_id'
end