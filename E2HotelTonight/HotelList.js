'use strict';

var React = require('react-native');
var {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} = React;

var HotelList = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: 'pink',
  }
})

module.exports = HotelList;
