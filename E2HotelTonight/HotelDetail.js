'use strict';

var React = require('react-native');
var {
  Text,
  View,
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  AlertIOS
} = React;

var HotelDetail = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Hotel Detail</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'aqua',
    marginTop: 65, //important
  },
})

module.exports = HotelDetail;
