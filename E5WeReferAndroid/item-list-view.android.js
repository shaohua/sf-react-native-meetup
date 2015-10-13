'use strict';

var React = require('react-native');
var {
  ListView,
  Text,
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

  render: function() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{'Row: ' + rowData}</Text>}
        />
      </View>
    );
  }
});

module.exports = ItemList;
