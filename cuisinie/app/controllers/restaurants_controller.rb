class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.new
    @restaurant = User.all
    @cuisines_New = Cuisine.new
  end

  def show
    @new_restaurant= create
    @comment = Comment.new
    @comments = Comment.where(:restaurant_id => @new_restaurant.id)
  end

  def create
    p @restaurant = search.parsed_response
    p @restaurant_hash = { 'name' => @restaurant['name'],
                           'address' => @restaurant['location']['address'],
                           'img_url' => @restaurant['featured_image'],
                           'cost' => @restaurant['average_cost_for_two'],
                           "menu"=> @restaurant['menu_url'],
                           'lat' => @restaurant['location']['latitude'],
                           'lon' => @restaurant['location']['longitude'],
                           'restaurant_id' => @restaurant['id'],
                           'user_rating' => @restaurant['user_rating']['aggregate_rating'] }
    return Restaurant.find_or_create_by(@restaurant_hash)
  end

  private

  # def favorite_params
  #   params.require :restaurant.permit(:name, :address, :img_url, :user_rating)
  # end

  def search
    query = {
      'res_id' => params[:id]
    }
    @search = HTTParty.get('https://developers.zomato.com/api/v2.1/restaurant?', query: query, headers: headers)
  end

  def headers
    header = {
      'user-key' => 'c6dc40392af08897eafe323966c8dcf1'
    }
  end
end
