NewsReader::Application.routes.draw do
  namespace :api do
    resources :feeds, only: [:index, :create, :show, :destroy] do
      resources :entries, only: [:index]
    end
  end

  root to: "static_pages#index"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end
