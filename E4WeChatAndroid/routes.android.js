'use strict';

var React = require('react-native');
var {
  BackAndroid,
  Text,
  View,
} = React;
var styles = require('./styles');
var DrawerView = require('./drawer-view');

var rnNavigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (rnNavigator && rnNavigator.getCurrentRoutes().length > 1) {
    rnNavigator.pop();
    return true;
  }
  return false;
});

var Routes = function (route, navigationOperations, onComponentRef) {
  // connect to hardwareBackPress
  rnNavigator = navigationOperations;

  switch (route.path) {
    case 'home':
    case 'addNewItem':
    case 'itemList':
    case 'itemDetail':
      return (
        <DrawerView
          path={route.path}
          navigator={navigationOperations} />
      );
      break;
    case 'splash':
      return (
        <View style={styles.container}>
          <Text style={styles.instructions}>
          To get started, edit index.android.js
          </Text>
        </View>
      );
    default:
  }

  return (
    <Text>Not found.</Text>
  )
};

module.exports = Routes;
