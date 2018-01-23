class Api::Article::ArticlesController < Api::BaseController

    def create
        begin
            ::Article::Main.transaction do 
                content = ::Article::Content.new
                content.content = params[:content]
                content.htmlcontent = params[:content][:htmlcontent]
                content.no = Utils::Redis.get_code_length_year(5,"WZZW")
                content.save!
                article_main = ::Article::Main.new(article_params)
                article_main.no = Utils::Redis.get_code_length_year(5,"WZ")
                article_main.content_id = content.id
                article_main.author = current_user.username
                article_main.author_id = current_user.id
                article_main.save!
            end
        rescue => exception
            api_error({message: exception.message})
        end
    end

    private 
    def article_params
        params.require(:article).permit(::Article::Main.attribute_names)    
    end

    def content_params
        params.require(:content).permit(::Article::Content.attribute_names)
    end
end 