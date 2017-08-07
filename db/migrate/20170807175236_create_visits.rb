class CreateVisits < ActiveRecord::Migration[5.0]
  def change
    create_table :visits do |t|
      t.string :city
      t.string :contry
      t.date :startDate
      t.date :endDate

      t.timestamps
    end
  end
end
