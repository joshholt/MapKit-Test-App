// ==========================================================================
// Project:   MapKitTest
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals MapKitTest */

/** @namespace

  An app to test MapKit Framework
  
  @extends SC.Object
*/
MapKitTest = SC.Application.create(
  /** @scope MapKitTest.prototype */ {

  NAMESPACE: 'MapKitTest',
  VERSION: '0.1.0',
  store: SC.Store.create().from(SC.Record.fixtures)
});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('map_kit_test');