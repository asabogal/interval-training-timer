Rails.application.routes.draw do
  get '/workouts', to: 'workouts#index'
end
