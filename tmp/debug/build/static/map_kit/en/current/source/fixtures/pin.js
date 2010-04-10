/*globals MapKit*/
sc_require('models/pin');
MapKit.Pin.FIXTURES = [
  {
    guid: 1,
    latitude: '39.138',
    longitude: '-77.187',
    markerIcon: 'red-pushpin'
  }
];; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('map_kit');