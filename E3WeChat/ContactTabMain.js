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

var ContactTabMain = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.contactList}>
          <Text>Adam Smith</Text>
        </View>
        <View style={styles.contactList}>
          <Text>Larry Page</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
  },
  contactList: {
    backgroundColor: 'bisque',
    height: 50,
    justifyContent: 'center',
  }
});

module.exports = ContactTabMain;
