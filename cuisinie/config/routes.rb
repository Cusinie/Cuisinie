Rails.application.routes.draw do
  devise_for :users

  root to: 'restaurants#index'
  # resources literally creates routes for each controller's method
  resources :restaurants, only: [:index, :show, :create]
  resources :comments , only: [:create,:new,:destroy]
  post "/comments/:id/reply", to: "comments#new",  as: "comment_reply"
  resources :apis , only: [:new, :create]
  resources :users , only: [:index , :show]
  resources :restaurants_users, only: [:destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
