/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  DrawerLayoutAndroid,
  StyleSheet,
  ToolbarAndroid,
  Text,
  View,
} = React;

var E4WeChatAndroid = React.createClass({
  render: function() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I am in the Drawer!</Text>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        ref={(drawer) => { this.drawer = drawer; }}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>

        <ToolbarAndroid
          navIcon={require('image!ic_menu_white')}
          onIconClicked={() => this.drawer.openDrawer()}
          style={styles.toolbar}
          title='WeChat Android' />

        <View style={styles.container}>
          <Text style={styles.welcome}>
          Welcome to React Native!!!!!
          </Text>
          <Text style={styles.instructions}>
          To get started, edit index.android.js
          </Text>
        </View>

      </DrawerLayoutAndroid>
    );
    }
});

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
});

AppRegistry.registerComponent('E4WeChatAndroid', () => E4WeChatAndroid);
