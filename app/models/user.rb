class User < ApplicationRecord
  validates :email, :password_digest, :session_token, uniqueness: true, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token, :initialize_wallet

  attr_reader :password

  has_many :transactions

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def initialize_wallet
    self.wallet ||= 5000
    self.save!
  end

  def confirm_funds(price)
    self.wallet >= price
  end

  def perform_transaction(price, type)
    self.wallet -= price if type == 'buy'
    self.wallet += price if type == 'sell'
    self.save!
  end

  def count_by_symbol
    self.transactions.group(:symbol).count
  end

  def transaction_price_totals
    self.transactions.group(:transaction_type).sum('price * quantity')
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end
end
