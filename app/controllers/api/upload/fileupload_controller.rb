class Api::Upload::FileUploadController < Api::BaseController
    def create
        begin
            uploader = FileUploader.new
            uploader.store!(params[:file])
            api_success({:message => "注册成功", :code => 0, :file => uploader.url})
        rescue => exception
            api_error({:message => e.message, :code => 1, :success => false})
        end
    end
end