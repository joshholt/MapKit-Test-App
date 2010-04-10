// ==========================================================================
// Project:   MapKitTest
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals MapKitTest MapKit*/

MapKitTest.main = function main() {
  var pinsQuery = SC.Query.local(MapKit.Pin);
  MapKitTest.getPath('mainPage.mainPane').append();
  MapKit.API_KEY = 'ABQIAAAAOE_nIq-3xUhH2ZA0GJVsmBT6mFWLYYUsXePk1-MOITFhnlb-oRTpWBHWHg_0k-rRTzmpVSMkQ2AZxw';
  MapKit.set('PINS',MapKitTest.store.find(pinsQuery));
};
function main() { MapKitTest.main(); }
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('map_kit_test');