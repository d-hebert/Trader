Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create, :index]
    resource :user, only: [:show]
    resources :transactions, only: [:new, :create, :index, :show]
    resource :portfolio, only: [:show]
    resource :session, only: [:new, :create, :show, :destroy]
  end
end
