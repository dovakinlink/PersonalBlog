class Article::Main < ApplicationRecord
    has_one :article_contents, class_name: 'Article::Content', foreign_key: 'article_id'
        dependent: :destory
end