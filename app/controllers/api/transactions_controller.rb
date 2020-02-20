class Api::TransactionsController < ApplicationController
  def index
    @transactions = Transaction.where(user_id: current_user.id)
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
        :message => "Transaction does not exist"
      }
    end
  end

  def create
    t_params = transaction_params
    user = current_user
    total = t_params[:quantity].to_i * t_params[:price].to_i
    transaction_type = t_params[:transaction_type]
    if user.confirm_funds(total) || transaction_type == 'sell'
      @transaction = Transaction.new(transaction_params)
      if @transaction.save
        user.perform_transaction(total, transaction_type)
        render '/api/transactions/show'
      else  
        render json: @transaction.errors.full_messages, status: 422
      end
    else
      render json: {
        :status => 402,
        :message => "Insufficient funds."
      }
    end
  end

  private
  def transaction_params
    params.require(:transaction).permit(:user_id, :symbol, :quantity, :price, :transaction_type)
  end

end