Rails.application.routes.draw do

  #namespace API routes....!
  get '/workouts', to: 'workouts#index'

  resources :users, only: [:new, :create]
  get '/users/:id/workouts', to: 'users#workouts'

  
end
