# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create!(
  email: 'guest@gmail.com',
  password: 'password!'
)

david = User.create!(
  email: 'd.hebert@live.com',
  password: 'password!'
)

Transaction.create!(
  user_id: 2,
  symbol: 'MSFT',
  transaction_type: 'buy',
  price: 10,
  quantity: 5
)

Transaction.create!(
  user_id: 2,
  symbol: 'MSFT',
  transaction_type: 'buy',
  price: 10,
  quantity: 2
)

Transaction.create!(
  user_id: 2,
  symbol: 'V',
  transaction_type: 'buy',
  price: 10,
  quantity: 4
)

Transaction.create!(
  user_id: 2,
  symbol: 'NFLX',
  transaction_type: 'buy',
  price: 10,
  quantity: 2
)