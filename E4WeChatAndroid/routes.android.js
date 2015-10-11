'use strict';

var React = require('react-native');
var {
  Text,
  View,
} = React;
var styles = require('./styles');
var DrawerView = require('./drawer-view');

var Routes = function (route, navigationOperations, onComponentRef) {
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
