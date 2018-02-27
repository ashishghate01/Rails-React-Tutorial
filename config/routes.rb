Rails.application.routes.draw do
	root to: 'site#index'
	namespace :api do
  	namespace :v1 do
  		resources :items, only: [:index,:create,:update,:destroy] 
  	end
  end
end
