class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.new
    @restaurant = User.all
    @cuisines_New = Cuisine.new
  end

  def show
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


        if Restaurant.exists?(name: @restaurant_hash['name'])
            @restaurant_hash = Restaurant.find_by(name: @restaurant_hash['name'])
            @hi = @restaurant_hash.id
          else
            @hi = create
        end
      @comments = Comment.all
      @comment = Comment.new

  end



  def create
    p @restaurant_hash
      @restaurant = Restaurant.new(@restaurant_hash)
      if @restaurant.save
        p @restaurant.id
          @id = @restaurant.id
      else
        p "not saved"
       end

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
