'use strict';

var React = require('react-native');
var {
  Text,
  View,
} = React;
var styles = require('./styles');
var DrawerView = require('./drawer-view');

var Routes = function (route, navigationOperations, onComponentRef) {
  switch (route.name) {
    case 'home':
    case 'list':
      return (
        <DrawerView />
      );
      break;
    case 'item':
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
