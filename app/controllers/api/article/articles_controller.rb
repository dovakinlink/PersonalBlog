class Api::Article::ArticlesController < Api::BaseController

    def index
        @article = ::Article::Main.order("created_at desc")
        @article = @article.by_title(params[:title])
                        .by_author(params[:author])

        respond_to do |format|
            format.json do
                @total = @article.count
                @article = @article.page(params[:page]).per(params[:pageSize])
            end
        end
    end

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
            api_success({message: "文章发布成功", status: 200, success: true})
        rescue => exception
            api_error({message: exception.message, status: 200, success: false})
        end
    end

    private 
    def article_params
        params.require(:article).permit(::Article::Main.attribute_names)    
    end
end 