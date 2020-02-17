class Transaction < ApplicationRecord
    validates :type, :user_id, :symbol, :price, :quantity, presence: true 

    belongs_to :user
end
