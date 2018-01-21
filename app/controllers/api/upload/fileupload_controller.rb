class Api::Upload::FileuploadController < Api::BaseController
    def create
        begin
            uploader = FileUploader.new
            if params[:avatar]
                result = uploader.store!(params[:avatar])
            else
                result = uploader.store!(params[:file])
            end
            api_success({:message => "注册成功", :code => 0, :file => uploader.url})
        rescue => exception
            api_error({:message => exception.message, :code => 1, :success => false})
        end
    end
end