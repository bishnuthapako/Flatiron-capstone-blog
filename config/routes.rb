Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users, only: [:index, :show, :create, :update]
  resources :tags, only: [:index, :create, :show]
  resources :comments, only: [:index, :show, :create, :update, :destroy]
  resources :posts, only: [:index, :create, :show, :update, :destroy]
  resources :members_only_posts, only: [:index, :show]

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    post "/signup", to: "users#create"
    get "/me", to: "users#show"
end
