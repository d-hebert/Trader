json.set! transaction.id do
  json.extract! transaction, :id, :user_id, :symbol, :price, :quantity, :created_at, :transaction_type
end