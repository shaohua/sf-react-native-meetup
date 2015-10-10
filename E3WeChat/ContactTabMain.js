/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
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

  _pressRow: function(rowData) {
    // AlertIOS.alert('console.log?', 'NO!');
    this.props.navigator.push({
      title: 'Contact Detail',
      component: ContactDetail,
      passProps: {rowData: rowData}
    });
  },

  _renderRow: function(rowData) {
    return (
      <View style={styles.rowContainer}>
        <TouchableHighlight
          onPress={() => this._pressRow(rowData)}
          underlayColor='deepskyblue'
          style={styles.rowButton}>
          <View style={styles.rowImageWithText}>
            <Image
              source={{
                uri: 'http://placehold.it/40x40'
              }}
              style={styles.image} />
            <View style={styles.text}>
              <Text>{rowData}</Text>
            </View>
          </View>
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
    borderBottomWidth: 1,
    borderColor: 'silver'
  },
  rowButton: {
    flex: 3,
    justifyContent: 'center',
  },
  rowImageWithText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowAction: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    justifyContent: 'center',
    marginLeft: 10,
  },
});

module.exports = ContactTabMain;
