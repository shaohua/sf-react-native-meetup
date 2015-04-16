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
  NavigatorIOS,
  ListView,
  TouchableHighlight,
} = React;

var ContactDetail = require('./ContactDetail');

var ContactTabMain = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      dataSource: ds.cloneWithRows([
        'Larry Page', 'Steve Jobs', 'Sergey Brin',
        'Evan Williams', 'Jack Dorsey', 'Jerry Yang',
        'Paul Allen', 'Reid Hoffman', 'Jack Ma', 'Elon Musk',
        'Sean Parker', 'Mark Zuckerberg', 'Larry Ellison', 'Lei Jun',
        'Robin Li', 'Ma Huateng']),
    };
  },

  _pressRow: function() {
    // AlertIOS.alert('console.log?', 'NO!');
    this.props.navigator.push({
      title: 'Contact Detail',
      component: ContactDetail,
      passProps: {}
    });
  },

  _renderRow: function(rowData) {
    return (
      <View style={styles.rowContainer}>
        <TouchableHighlight
          onPress={() => this._pressRow()}
          underlayColor='deepskyblue'
          style={styles.rowButton}>
          <Text>{rowData}</Text>
        </TouchableHighlight>
        <View style={styles.rowAction}>
          <Text>Call</Text>
        </View>
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
    flex: 1,
    backgroundColor: 'bisque',
  },
  rowContainer: {
    flexDirection: 'row',
    height: 50,
  },
  rowButton: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowAction: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  }
});

module.exports = ContactTabMain;
