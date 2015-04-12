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
        <View style={styles.spacer} />
        <SearchBar />
        <HotelList navigator={this.props.navigator}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacer: {
    height: 65,
  }
})

module.exports = HomeScreen;
