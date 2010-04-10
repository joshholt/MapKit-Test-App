// ==========================================================================
// Project:   MapKitTest - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals MapKitTest MapKit*/

MapKitTest.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'mapView'.w(),
    
    mapView: MapKit.MapView.design({})
    
  })
});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('map_kit_test');