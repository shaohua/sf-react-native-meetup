/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  DrawerLayoutAndroid,
  DrawerLayout,
  Navigator,
  StyleSheet,
  ToolbarAndroid,
  Text,
  View,
} = React;

var routes = require('./routes');
var styles = require('./styles');

var E4WeChatAndroid = React.createClass({
  render: function() {
    var initialRoute = {
      path: 'home'
    };

    return (
      <Navigator
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        style={styles.container}
        initialRoute={initialRoute}
        renderScene={routes}
      />
    );
    }
});

AppRegistry.registerComponent('E4WeChatAndroid', () => E4WeChatAndroid);
