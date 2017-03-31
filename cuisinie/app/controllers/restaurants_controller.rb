class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.new
    @restaurant = User.all
    @cuisines = HTTParty.get('https://developers.zomato.com/api/v2.1/search?', query: query, headers: headers)
    @cuisinesNew = Cuisine.new
  end

  private

  def query; end

  # HTTParty.get("https://developers.zomato.com/api/v2.1/search?", query = {"entity_id" => 280, "entity_type" => "city", "cuisines" => 193}, headers = {"user-key" => "c6dc40392af08897eafe323966c8dcf1"})
end
