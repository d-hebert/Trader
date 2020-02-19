class Transaction < ApplicationRecord
    validates :transaction_type, :user_id, :symbol, :price, :quantity, presence: true 

    belongs_to :user
end
