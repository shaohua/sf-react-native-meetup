'use strict';

var React = require('react-native');
var {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} = React;

var SearchBar = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}/>
        <TouchableHighlight style={styles.searchButton}>
          <Text>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    flex: 2,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  searchButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F2F2F2'
  }
})

module.exports = SearchBar;
