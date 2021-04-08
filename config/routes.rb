Rails.application.routes.draw do
  get 'home/contact'
  get 'home/products'
  root 'home#index'
end
