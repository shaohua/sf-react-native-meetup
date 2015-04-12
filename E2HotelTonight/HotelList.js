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


  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'pink',
  }
})

module.exports = HotelList;
