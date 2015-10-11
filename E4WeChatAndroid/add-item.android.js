'use strict';

var React = require('react-native');
var {
  Text,
  View,
} = React;
var styles = require('./styles');

var AddItem = React.createClass({
  render: function() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text>Add Item</Text>
      </View>
    );
  }
});

module.exports = AddItem;
