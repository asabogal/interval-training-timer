class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :sets, :sets_done, :interval, :rest, :running, :running_time, :user_id
  
end
