// ==========================================================================
// Project:   MapKitTest
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals MapKitTest MapKit*/

/** @namespace

  An app to test MapKit Framework
  
  @extends SC.Object
*/
MapKitTest = SC.Object.create(
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
    if (address) {
      MapKit.addPinForAddress(address);
    } else {
      SC.Logger.warn("Could Not add pin b/c no address was provided");
    }
  },
  
  removePin: function(){
    var selectedPin = MapKit.pinController.get('content');
    var mapView = MapKitTest.mainPage.get('mapView');
    if (selectedPin) {
      selectedPin.destroy();
      mapView.removePin(selectedPin);
    } else {
      SC.Logger.warn("Could Not delete a pin b/c one was not selected");
    }
  },
  
  moveToPin: function() {
    var mapView = MapKitTest.mainPage.get('mapView');
    var selectedPin = MapKit.pinController.get('content');
    if (mapView && selectedPin) {
      MapKit.moveMapToPin(mapView, selectedPin);
    }
  }
  
  // ..........................................................
  // NS PRIVATE FUNCTIONS
  // 
});
