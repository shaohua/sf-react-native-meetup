'use strict';

var React = require('react-native');
var {
  DrawerLayoutAndroid,
  ToolbarAndroid,
  Text,
  View,
} = React;
var styles = require('./styles');
var NavigationView = require('./navigation-view');
var AddItemView = require('./add-item-view');
var ItemDetailView = require('./item-detail-view');

var DrawerLayoutView = React.createClass({
  getChildren: function(path) {
    var children;
    switch (path) {
      case 'addItem':
        return (
          <AddItemView />
        );
      case 'itemList':
      case 'itemDetail':
        return (
          <ItemDetailView />
        );
      default:
        return (
          <View>
            <Text>main view</Text>
            <Text></Text>
            <Text>{path}</Text>
          </View>
        );
    }
  },

  render: function() {
    var localDrawer;
    return (
      <DrawerLayoutAndroid
        ref={(drawer) => { localDrawer = drawer; }}
        drawerWidth={200}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() =>
          <NavigationView navigator={this.props.navigator} />
        }
      >

        <ToolbarAndroid
          logo={require('image!ic_logo')}
          navIcon={require('image!ic_menu_white')}
          onIconClicked={() => localDrawer.openDrawer()}
          style={styles.toolbar}
          title={this.props.path} />

        {this.getChildren(this.props.path)}

      </DrawerLayoutAndroid>
    );

  }
});

module.exports = DrawerLayoutView;
