class Api::BaseController < ApplicationController

    include ApiRenderable

    # disable the CSRF token
    protect_from_forgery with: :null_session
      # disable the CSRF token
    skip_before_action :verify_authenticity_token

    before_action :authenticate_user!,if: :user_sign_in?
    attr_accessor :current_user

    def authenticate_user!
      token, options = ActionController::HttpAuthentication::Token.token_and_options(request)
      token ||= request.authorization
      user = token && ::Admin::User.find_by(authentication_token: token)

      if user &&
        # AuthenticationService.call(user,{}) &&
        ActiveSupport::SecurityUtils.secure_compare(user.authentication_token, token)
        self.current_user = user
      end
    end

    def user_sign_in?
      /[^session]/ =~ controller_name
    end
end