'use strict';

var React = require('react-native');
var {
  ListView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  View,
} = React;
var styles = require('./styles');
var range = require('lodash.range');

var ItemList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    var rowList = range(50);
    return {
      dataSource: ds.cloneWithRows(rowList)
    };
  },

  onPressSubmit: function() {
    ToastAndroid.show('Add new item', ToastAndroid.LONG);
  },

  render: function() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{'Row: ' + rowData}</Text>}
        />
        <TouchableHighlight
          onPress={this.onPressSubmit}>
          <Text>Add a new item</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = ItemList;
