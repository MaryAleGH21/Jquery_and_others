class HomeController < ApplicationController
  
  def index
    @sales_grouped_by_date = Sale.group("strftime('%m-%Y', date_time)").order(date_time: :asc).sum(:amount)
    @sales_grouped_by_beer = Sale.group(:beer).count
  end

  def contact
  end

  def products
  end
end
