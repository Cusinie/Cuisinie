Rails.application.routes.draw do
  devise_for :users

  root to: 'restaurants#index'
  # resources literally creates routes for each controller's method
  resources :restaurants, only: [:index, :show, :create]
  resources :comments , only: [:create, :destroy]
  resources :apis , only: [:new, :create]
  resources :users , only: [:index , :show]
  resources :restaurants_users, only: [:destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
