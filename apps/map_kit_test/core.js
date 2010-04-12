// ==========================================================================
// Project:   MapKitTest
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals MapKitTest MapKit*/

/** @namespace

  An app to test MapKit Framework
  
  @extends SC.Object
*/
MapKitTest = SC.Object.create(MapKit.MapViewDelegate,
  /** @scope MapKitTest.prototype */ {

  // ..........................................................
  // NS PROPERTIES
  // 
  NAMESPACE: 'MapKitTest',
  VERSION: '0.1.0',
  store: SC.Store.create().from(SC.Record.fixtures),
  currentAddress: null,
  
  // ..........................................................
  // NS FUNCTION
  // 
  openAddPinPicker: function(){
    SC.Logger.log("Opening Add Pin Picker");
    var pane = MapKitTest.mainPage.get('addPinPicker');
    var button = MapKitTest.mainPage.get('addPinButton');
    if (pane) {
      pane.popup(button.get('layer'),SC.PICKER_POINTER);
    }
    
  },
  
  addPinForAddress: function(){
    var address = this.get('currentAddress');
    var mapProxy = MapKit.proxyForMap('demo');
    if (address && mapProxy) {
      mapProxy.addPinForAddress(address);
      this.invokeLater(this.moveToPin, 600);
    } else {
      SC.Logger.warn("Could Not add pin b/c no address was provided");
    }
  },
  
  removePin: function(){
    var selectedPin = MapKit.pinController.get('content');
    var mapProxy = MapKit.proxyForMap('demo');
    if (selectedPin && mapProxy) {
      selectedPin.destroy();
      mapProxy.removePin(selectedPin);
    } else {
      SC.Logger.warn("Could Not delete a pin b/c one was not selected");
    }
  },
  
  moveToPin: function() {
    var selectedPin = MapKit.pinController.get('content');
    var mapProxy = MapKit.proxyForMap('demo');
    if (mapProxy && selectedPin) {
      mapProxy.moveMapToPin(selectedPin);
    }
  }
  
  // ..........................................................
  // NS PRIVATE FUNCTIONS
  // 
});
