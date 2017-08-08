class CreateVisits < ActiveRecord::Migration[5.0]
  def change
    create_table :visits do |t|
      t.string :city
      t.string :state
      t.string :country
      t.datetime :startdate
      t.datetime :enddate
      t.float :longitude
      t.float :latitude

      t.timestamps
    end
  end
end
