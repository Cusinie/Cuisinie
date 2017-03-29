class RestaurantsController < ApplicationController
  def index
    @restaurant = User.all
  end
end
