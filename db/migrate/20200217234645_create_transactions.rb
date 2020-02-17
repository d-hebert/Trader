class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :type, null: false
      t.integer :user_id, null: false
      t.string :symbol, null: false
      t.float :price, null: false
      t.integer :quantity, null: false
      t.timestamps
    end
    add_index :transactions, :symbol
    add_index :transactions, :user_id
  end
end
