class Api::PortfoliosController < ApplicationController
  def show
    @user = current_user
    if @user
      render '/api/portfolios/show'
    else
      render json: ["You are not logged in."], status: 403
    end
  end
end