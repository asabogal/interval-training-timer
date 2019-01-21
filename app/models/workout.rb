class Workout < ApplicationRecord
  belongs_to :user, optional: :true

  validates :name, presence: true
  validates :sets, presence: true
  validates :interval, presence: true
  validates :rest, presence: true

end
