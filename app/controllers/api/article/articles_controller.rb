class Api::Article::ArticlesController < ::Api::ApplicationController

    def create
        begin
            content = ::Article::Content.new(content_params)
            content.no = Utils::Redis.get_code_length_year(5,"WZ")
            content.save!
            article_main = ::Article::Main.new(article_params)
            article_main.content_id = content.id
        rescue => exception
            
        end
    end

    private 
    def article_params
        params.require(:article).permit(::Article::Main.attribute_names)    
    end

    def content_params
        parmas.require(:content).permit(::Article::Content.attribute_names)
    end
end 