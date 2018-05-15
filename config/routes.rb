Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }
  root to: 'site#index'
  # see http://guides.rubyonrails.org/routing.html to know more about routes in rails
end
