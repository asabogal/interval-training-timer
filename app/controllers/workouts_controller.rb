class WorkoutsController < ApplicationController

  def index
    @workouts = Workout.all
    json = @workouts.to_json
    render json: json
  end

end