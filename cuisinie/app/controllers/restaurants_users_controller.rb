class RestaurantsUsersController < ApplicationController

    def destroy
       @selected_row = RestaurantsUser.where(user_id: "#{current_user.id}"  , restaurant_id: params[:id] )
       @selected_row.each{|s_r| p @selected_row.destroy(:users_r.id)}
  end
end
