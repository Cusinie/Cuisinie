Rails.application.routes.draw do
  devise_for :users

  root to: 'homes#index'

  root to: 'restaurants#index'
  # resources literally creates routes for each controller's method
  resources :restaurants
  resources :cuisines
  resources :comments
  resources :apis
  resources :favorites

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
