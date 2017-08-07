var styles = [ /* the style copied from Snazzy maps */ ];

var handler = Gmaps.build('Google');
handler.buildMap({
  provider: {
    styles: styles
    // pass in other Google Maps API options here
    // => https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  },
  internal: { id: 'map' } }, function() {
  // [ ... ]
});
