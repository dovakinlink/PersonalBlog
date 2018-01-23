class Article::Main < ApplicationRecord
    has_one :article_contents, class_name: 'Article::Content', foreign_key: 'content_id',
        dependent: :destroy
end