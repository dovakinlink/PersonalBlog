class Article::Main < ApplicationRecord
    has_one :article_contents, class_name: 'Article::Content', foreign_key: 'content_id',
        dependent: :destroy

    scope :by_title, ->(title) {
        where(:title => title) if title.present?
    }

    scope :by_author, ->(author) {
        where(:author => author) if author.present?
    }

    
end