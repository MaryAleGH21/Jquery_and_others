class CreateSales < ActiveRecord::Migration[6.1]
  def change
    create_table :sales do |t|
      t.string :beer, default: 0
      t.integer :amount
      t.datetime :date_time

      t.timestamps
    end
  end
end
