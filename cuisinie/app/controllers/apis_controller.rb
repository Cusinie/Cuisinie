class ApisController < ApplicationController
  def create
    p '>.......................................'
    @new_data = search.parsed_response
    p '>.......................................'
    @new_data['restaurants']
    @filtered_response = @new_data['restaurants'].map do |restaurant|
      { 'name' => restaurant['restaurant']['name'],
        'address' => restaurant['restaurant']['location']['address'],
        'img_url' => restaurant['restaurant']['featured_image'],
        'cost' => restaurant['restaurant']['average_cost_for_two'],
        'lat' => restaurant['restaurant']['location']['latitude'],
        'lon' => restaurant['restaurant']['location']['longitude'],
        'restaurant_id' => restaurant['restaurant']['id'],
        'user_rating' => restaurant['restaurant']['user_rating']['aggregate_rating'] }
    end
    render json: @filtered_response
  end

  private

  def search
    query = {
      'entity_id' => 280,
      'entity_type' => 'city',
      'cuisines' => cuisine_params['id']
    }
    @cuisine = HTTParty.get('https://developers.zomato.com/api/v2.1/search?', query: query, headers: headers)
  end

  def headers
    header = {
      'user-key' => 'c6dc40392af08897eafe323966c8dcf1'
    }
  end

  def cuisine_params
    id = params.require(:cuisine).permit(:id)
  end
end
