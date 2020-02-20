class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render "api/users/index"
  end

  def new
  end

  def show
    @user = User.find(params[:id])
    if @user
      render '/api/users/show'
    else
      render json: {
        :status => 403,
        :error => "You are not logged in"
      }
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render '/api/users/show'
    else
      debugger
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

end