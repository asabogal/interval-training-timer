class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end


  def workouts
    @user = User.find(params[:id])
    @workouts = @user.workouts
    render json: @workouts, status: 200
  end

  private

  def user_params
    params.require(:user).permit(:username, :password_digest)
  end

end