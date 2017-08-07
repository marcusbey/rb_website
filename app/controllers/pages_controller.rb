class PagesController < ApplicationController

  def home
    @motivation_quotes = [
      {
      quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
      autor: "Ayn Rand"
      },
      {
       quote: "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
       autor: "Jim Ronh"
      }
  ]
  @city = 'Montreal'
  @city_coordinates = { lat: @city.latitude, lng: @wcity.longitude }
    @hash = Gmaps4rails.build_markers(@city) do |city, marker|
      marker.lat city.latitude
      marker.lng city.longitude
    end

  end

  def now
  end

  def myworks
  end

  def mywritings
  end

  def myworld
  end

  def contact
  end

end
