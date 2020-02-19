class Api::TransactionsController < ApplicationController
  def index
    @transactions = Transaction.all
    render "api/transactions/index"
  end

  def new
  end

  def show
    @transaction = Transaction.find(params[:id])
    if @transaction
      render '/api/transactions/show'
    else  
      render json: {
        :status => 403,
        :message => "Transaction does not exist."
      }
    end
  end

  def create
    params = transaction_params
    user = current_user
    total_price = params.quantity * params.price
    if user.confirm_funds(total_price)
      @transaction = Transaction.new(transaction_params)
      params[user_id] = user.id
      if @transaction.save
        user.perform_transaction(total_price)
        render '/api/transactions/show'
      else  
        render json: @transactions.errors.full_messages, status: 422
      end
    else
      render json: {
        :status => 402,
        :message => "Insufficient funds."
      }
  end

  private
  def transaction_params
    params.require(:transaction).permit(:symbol, :quantity, :price, :type)
  end

end