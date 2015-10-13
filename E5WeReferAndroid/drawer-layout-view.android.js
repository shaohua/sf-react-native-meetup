'use strict';

var React = require('react-native');
var {
  DrawerLayoutAndroid,
  ToolbarAndroid,
  Text,
  View,
} = React;
var styles = require('./styles');

var DrawerLayoutView = React.createClass({
  getChildren: function(path) {
    var children;
    switch (path) {
      case 'addItem':
      case 'itemList':
      case 'itemDetail':
      default:
        return (
          <View>
            <Text>main view</Text>
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
          <View navigator={this.props.navigator} style={styles.navigationView}>
            <Text>NavigationView</Text>
          </View>
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
