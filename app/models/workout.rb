class Workout < ApplicationRecord
  belongs_to :user, optional: :true
end
