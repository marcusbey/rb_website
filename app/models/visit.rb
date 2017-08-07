class Visit < ApplicationRecord

  geocoded_by :address

  after_validation :geocode, if: :address_changed?
  def address
    [city, state].compact.join(', ')
  end

end
