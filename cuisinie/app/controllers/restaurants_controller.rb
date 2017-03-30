class RestaurantsController < ApplicationController


  def index
    @restaurant = User.all
  end

  def search
    @cuisine = HTTParty.get("https://developers.zomato.com/api/v2.1/search?", :query => query, :headers => headers)
  end

  private

  def query
    query = {
      "entity_id" => 280,
      "entity_type" => "city",
      "cuisines" => cuisine_params
    }
  end
  # HTTParty.get("https://developers.zomato.com/api/v2.1/search?", query = {"entity_id" => 280, "entity_type" => "city", "cuisines" => 193}, headers = {"user-key" => "c6dc40392af08897eafe323966c8dcf1"})
  def headers
    header = {
      "user-key" => "c6dc40392af08897eafe323966c8dcf1"
    }
  end

  def cuisine_params
    params.require(:cuisine).permit(:cuisine_type)
  end
end
