class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :sets, :running_sets, :interval, :rest, :running, :running_time
end
