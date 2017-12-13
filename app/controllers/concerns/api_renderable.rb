module ApiRenderable
    extend ActiveSupport::Concern
    included do
      def api_render(opts = {})
        render :json=>opts, status: opts[:status]
      end
  
      def api_success(opts = {})
        api_render({:message => '成功'|| opts[:message], :status => 200, :success => true}.merge(opts))
      end
      def api_error(opts = {})
        api_render({:message => '失败'|| opts[:message], :status => 422, :success => false}.merge(opts))
      end
      def unauthenticated!
        api_render({:message=>'未授权',status: 401,:success=>false})
      end
    end
end