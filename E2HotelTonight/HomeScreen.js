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

var SearchBar = require('./SearchBar');
var HotelList = require('./HotelList');

var HomeScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <HotelList />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  }
})

module.exports = HomeScreen;
