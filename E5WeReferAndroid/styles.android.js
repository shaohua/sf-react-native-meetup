'use strict';

var React = require('react-native');
var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    height: 56,
  },
  logo: {
    width: 100,
    height: 100
  },
  navigationView: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

module.exports = styles;
