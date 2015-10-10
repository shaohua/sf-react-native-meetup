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
  TouchableHighlight,
} = React;

var fetch = require('fetch');

var ContactDetail = React.createClass({
  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
    var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query'
      + '&prop=extracts&exintro=&explaintext=&titles='
      + encodeURIComponent(this.props.rowData);

    fetch(url)
      .then((response) => {
        this.setState({
          response: response
        });
      })
      .catch((error) => {
        console.error('error');
      });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>{this.props.rowData}</Text>
        <Text>{this.state.response}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
});

module.exports = ContactDetail;
