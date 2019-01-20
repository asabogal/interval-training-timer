class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :name
      t.integer :sets
      t.integer :sets_done, default: 0
      t.integer :interval
      t.integer :rest
      t.boolean :running, default: false
      t.integer :running_time, default: 0
      t.integer :user_id

      t.timestamps
    end
  end
end
