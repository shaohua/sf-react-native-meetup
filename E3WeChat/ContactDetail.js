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
  TouchableHighlight,
} = React;

var ContactDetail = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>{this.props.rowData}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
});

module.exports = ContactDetail;
