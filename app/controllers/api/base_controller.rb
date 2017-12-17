class Api::BaseController < ApplicationController

    include ApiRenderable

    # disable the CSRF token
    protect_from_forgery with: :null_session
      # disable the CSRF token
    skip_before_action :verify_authenticity_token
end