class UsersController < ApplicationController

  def workouts
    user = User.find(params[:id])
    workouts = user.workouts
    render json: workouts
  end

end