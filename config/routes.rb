Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :admin do
      resources :users
      resources :sessions
    end

    namespace :article do
      resources :articles
    end
  end
end
