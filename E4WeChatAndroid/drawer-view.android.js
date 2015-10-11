'use strict';

var React = require('react-native');
var {
  DrawerLayoutAndroid,
  ToolbarAndroid,
  Text,
  View,
} = React;
var styles = require('./styles');
var DrawerNavigationView = require('./drawer-navigation-view');
var AddItem = require('./add-item');

var DrawerView = React.createClass({
  getChildren: function(path) {
    var children;
    switch (path) {
      case 'addItem':
        return (<AddItem />);
      default:
        return (
          <View>
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
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() =>
          <DrawerNavigationView navigator={this.props.navigator}/>} >

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

module.exports = DrawerView;
