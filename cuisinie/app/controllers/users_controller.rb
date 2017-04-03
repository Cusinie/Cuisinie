class UsersController < ApplicationController
  def index
    @newUser_Restaurant = User.all
  end

  def show
    @newUser_Restaurant = User.find(current_user.id)
    @restaurants = Restaurant.includes(:users).where("users.id=#{current_user.id}").references(:users)
  end
end
