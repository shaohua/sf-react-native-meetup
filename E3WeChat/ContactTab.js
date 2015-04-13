/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

var ContactTabMain = require('./ContactTabMain');

var ContactTab = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Contact',
          component: ContactTabMain,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = ContactTab;
