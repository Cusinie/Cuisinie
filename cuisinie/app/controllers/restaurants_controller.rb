class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.new
    @restaurant = User.all
    # @cuisines = HTTParty.get('https://developers.zomato.com/api/v2.1/search?', query: query, headers: headers)
    @cuisines_New = Cuisine.new
  end

  def show
    # @restaurants = Restaurant.new(restaurant_params)
    p @restaurant = search.parsed_response
    p @restaurant = { 'name' => @restaurant['name'],
                      'address' => @restaurant['location']['address'],
                      'img_url' => @restaurant['featured_image'],
                      'cost' => @restaurant['average_cost_for_two'],
                      'lat' => @restaurant['location']['latitude'],
                      'lon' => @restaurant['location']['longitude'],
                      'restaurant_id' => @restaurant['id'],
                      'user_rating' => @restaurant['user_rating']['aggregate_rating'] }
      @comments = Comment.all
      @comment = Comment.new
  end

  # def favor; end

  private

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
