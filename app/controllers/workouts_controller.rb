class WorkoutsController < ApplicationController

  def index
    @workouts = Workout.all
    render json: @workouts, status: 200
  end

end