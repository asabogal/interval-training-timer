Rails.application.routes.draw do

  #namespace API routes....!
  resources :workouts, only: [:index, :create, :update, :destroy]
  get '/workouts', to: 'workouts#index'

  resources :users, only: [:create]
  get '/users/:id/workouts', to: 'users#workouts'

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  
end
