class RestaurantsUsersController < ApplicationController

  def destroy
    @selected_row = RestaurantsUser.where(user_id: "#{current_user.id}"  , restaurant_id: params[:id] )
    if @selected_row.each{|s_r| p @selected_row.destroy(s_r.id)}
      redirect_to :back
    else
      redirect_to :back
    end
  end
end
