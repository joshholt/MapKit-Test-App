// ==========================================================================
// Project:   MapKitTest - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals MapKitTest MapKit*/

MapKitTest.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'pinList mapView controlBar'.w(),
    pinList: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { top: 0, left: 0, bottom: 40 , width: 175 },
      contentView: SC.ListView.design({
        contentBinding: 'MapKit.pinsController.arrangedObjects',
        selectionBinding: 'MapKit.pinsController.selection',
        rowHeight:24,
        delegate: MapKitTest,
        canReorderContent: YES,
        canDeleteContent: YES,
        allowDeselectAll: YES,
        contentValueKey: 'name',
        actOnSelect: YES,
        target: MapKitTest,
        action: 'moveToPin'
      })
    }),
    controlBar: SC.View.design({
      backgroundColor: '#dedede',
      layout: {bottom: 0, left: 0, width: 175, height: 40},
      childViews:'addButton removeButton'.w(),
      addButton: SC.ButtonView.design({
        layout: { bottom: 4, right: 4, width: 40, height: 40 },
        titleMinWidth: 0,
        title: '+',
        action: 'MapKitTest.openAddPinPicker'
      }),
      removeButton: SC.ButtonView.design({
        layout: { bottom: 4, right: 52, width: 40, height: 40 },
        titleMinWidth: 0,
        title: '-',
        action: 'MapKitTest.removePin'
      })
    }),
    mapView: MapKit.MapView.design({
      layout: { top: 0, left: 176, bottom: 0, right: 0}
    })
    
  }),
  
  addPinPicker: SC.PickerPane.create({
    layout: { width: 275, height: 100 },
    contentView: SC.View.design({
      backgroundColor: '#B4C4D4',
      layout: { top: 5, left: 5, bottom: 5, right: 5},
      childViews: 'addressBox addButton'.w(),
      addressBox: SC.TextFieldView.design({
        layout: { centerY: 0, width: 196, height: 24, left: 4 },
        hint: 'Address...',
        valueBinding: 'MapKitTest.currentAddress'
      }),
      addButton: SC.ButtonView.design({
        layout: { centerY: 0, left: 204, height: 24, width: 60 },
        titleMinWidth: 0,
        title: 'Add',
        action: 'MapKitTest.addPinForAddress'
      })
    })
  }),
  
  addPinButton: SC.outlet('mainPane.controlBar.addButton'),
  mapView: SC.outlet('mainPane.mapView')
  
});
