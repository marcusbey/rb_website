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
    @place = Visit.last
    @place_coordinates = { lat: @place.latitude, lng: @place.longitude }
    @hash = Gmaps4rails.build_markers(@place) do |place, marker|
      marker.lat place.latitude
      marker.lng place.longitude
    end
  end

  def now
  end

  def about
  end

  def works
  end

  def writings
  end

  def world
  end

  def contact
  end

end
