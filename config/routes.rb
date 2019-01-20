Rails.application.routes.draw do

  get '/workouts', to: 'workouts#index'
  
  get '/users/:id/workouts', to: 'users#workouts'

end
