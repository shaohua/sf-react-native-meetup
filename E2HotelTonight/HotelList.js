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
} = React;

var HotelList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  },

  _renderRow: function(rowData) {
    return (
      <View style={styles.rowContainer}>
        <Text>{rowData}</Text>
      </View>
    )
  },


  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'pink',
  },
  rowContainer: {
    flex: 1,
    backgroundColor: 'blue',
  }

})

module.exports = HotelList;
