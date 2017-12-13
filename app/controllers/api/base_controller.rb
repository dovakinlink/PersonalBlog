class Api::BaseController < ApplicationController

    include ApiRenderable

    # disable the CSRF token
    protect_from_forgery with: :null_session
end