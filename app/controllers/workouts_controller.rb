class WorkoutsController < ApplicationController

  def index
    @workouts = Workout.all
    render json: @workouts, status: 200
  end

  def create
    #must find current user and .build workouts with (workoutparams) ??:
       # @user = User.find(1)
       # @workout = @user.workouts.build(workout_params)
    @workout = Workout.new(workout_params)
    if @workout.save
      render json: @workout, status: :created, location: @workout
    else
      render json: @workout.errors, status: :unprocessable_entity
    end
  end

  private 

  def workout_params
    params.require(:workout).permit(:name, :sets, :sets_done, :interval, :rest, :running, :running_time)
  end

end