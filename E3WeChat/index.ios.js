/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} = React;

var ChatTab = require('./ChatTab');

var tabs = {
  chat: 'chatTab',
  contact: 'contactTab',
  discover: 'discoverTab',
  me: 'meTab',
};

var E3WeChat = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: tabs.chat,
      notifCount: 0,
      presses: 0,
    };
  },

  _renderContent: function(color, pageText) {
      return (
        <View style={[styles.tabContent, {backgroundColor: color}]}>
          <Text style={styles.tabText}>{pageText}</Text>
          <Text style={styles.tabText}>{this.state.presses} re-renders of the More tab</Text>
        </View>
      );
    },

  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Chat"
          selected={this.state.selectedTab === tabs.chat}
          onPress={() => {
            this.setState({
              selectedTab: tabs.chat,
            });
          }}>
          <ChatTab />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="contacts"
          title="Contacts"
          selected={this.state.selectedTab === tabs.contact}
          onPress={() => {
            this.setState({
              selectedTab: tabs.contact,
            });
          }}>
          {this._renderContent('#414A8C', tabs.contact)}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Discover"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === tabs.discover}
          onPress={() => {
            this.setState({
              selectedTab: tabs.discover,
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('#783E33', tabs.discover)}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Me"
          selected={this.state.selectedTab === 'meTab'}
          onPress={() => {
            this.setState({
              selectedTab: tabs.me,
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent('#21551C',  tabs.me)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

AppRegistry.registerComponent('E3WeChat', () => E3WeChat);
