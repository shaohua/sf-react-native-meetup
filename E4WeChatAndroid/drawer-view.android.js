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

var DrawerView = React.createClass({
  render: function() {
    var localDrawer;
    return (
      <DrawerLayoutAndroid
        ref={(drawer) => { localDrawer = drawer; }}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <DrawerNavigationView />} >

        <ToolbarAndroid
          navIcon={require('image!ic_menu_white')}
          onIconClicked={() => localDrawer.openDrawer()}
          actions={[{title: 'Settings', icon: require('image!ic_menu_white'), show: 'always'}]}
          onActionSelected={this.onActionSelected}
          style={styles.toolbar}
          title='WeChat Android' />

        <View style={styles.container}>
          <Text style={styles.welcome}>
          Welcome to React Native!!!!!
          </Text>
          <Text style={styles.instructions}>
          To get started, edit index.android.js
          </Text>
        </View>

      </DrawerLayoutAndroid>
    );

  }
});

module.exports = DrawerView;
