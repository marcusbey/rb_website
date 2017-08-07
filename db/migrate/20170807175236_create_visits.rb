class CreateVisits < ActiveRecord::Migration[5.0]
  def change
    create_table :visits do |t|
      t.string :city
      t.string :contry
      t.datetime :start
      t.datetime :end

      t.timestamps
    end
  end
end
