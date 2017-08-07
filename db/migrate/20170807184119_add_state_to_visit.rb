class AddStateToVisit < ActiveRecord::Migration[5.0]
  def change
    add_column :visits, :state, :string
    remove_column :visits, :contry, :string
  end
end
