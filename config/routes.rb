Rails.application.routes.draw do
  get 'pages/home'

  get 'pages/now'

  get 'pages/works'

  get 'pages/writings'

  get 'pages/worlds'

  get 'pages/contact'

  root to: 'pages#home'

  resources :visits
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
