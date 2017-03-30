Rails.application.routes.draw do
  devise_for :users
  root to: 'homes#index'
  resources :restaurants

  # get '/restaurants', to: 'shouts#index', as: :restaurants
  # get '/users/:id', to: 'users#show', as: :user
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
