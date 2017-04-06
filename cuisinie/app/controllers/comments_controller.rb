class CommentsController < ApplicationController
  def new
    @comment = Comment.new
    # @comment.restaurant_id = Restaurant.show.id
  end

  def create
    if Comment.exists?(params[:comment][:parent_id])
      @response = Comment.find(params[:comment][:parent_id])
      @data = new_comment
      if @response.children.create(@data)
        redirect_to restaurant_path(Restaurant.find(params[:comment][:restaurant_id])[:restaurant_id])
      else
        redirect_to :back
      end
    else
      p @data = new_comment
      @comment = Comment.new(@data)
      if @comment.save
        redirect_to :back
      else
        redirect_to :back
      end
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    p"descenant**************************"
    if @comment.destroy
      redirect_to :back
    else
      redirect_to :back
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:author, :content, :user_id, :restaurant_id, :parent_id)
  end

  def new_comment
    @data = comment_params
    if @data[:parent_id]==nil  then @data[:parent_id]= nil else @data end
    @data[:author] =  current_user.email
    return @data
  end

end
