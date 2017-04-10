class Comment < ApplicationRecord
  has_closure_tree  dependent: :destroy
  belongs_to :restaurant
  belongs_to :user
end
