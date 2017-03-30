Rails.application.routes.draw do
  devise_for :users
  root to: 'restaurants#index'
  resources :restaurants
  resources :cuisines

  resources :apis

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
