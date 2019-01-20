require 'pry'
class UsersController < ApplicationController

  def workouts
    user = User.find(params[:id])
    workouts = user.workouts
    json = workouts.to_json
    render json: json
  end

end