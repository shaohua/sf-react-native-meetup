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
} = React;

var ChatTab = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>chat tab</Text>
        </View>
        <View style={styles.chatList}>
          <Text>some chat content</Text>
        </View>
        <View style={styles.chatList}>
          <Text>some chat content</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 30,
    height: 50,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatList: {
    backgroundColor: 'bisque',
    height: 50,
    justifyContent: 'center',
  }
});

module.exports = ChatTab;
