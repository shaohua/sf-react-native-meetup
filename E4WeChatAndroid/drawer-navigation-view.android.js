'use strict';

var React = require('react-native');
var {
  DrawerLayoutAndroid,
  ListView,
  ToolbarAndroid,
  TouchableHighlight,
  Text,
  View,
} = React;
var styles = require('./styles');

var DrawerNavigationView = React.createClass({
  renderMenuItem: function(menuItem) {
    return (
      <TouchableHighlight
        style={{
          height: 60,
          padding: 30
        }} >
        <Text>{menuItem.text}</Text>
      </TouchableHighlight>
    );
  },

  render: function() {
    var dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ListView
          dataSource={dataSource.cloneWithRows([
            {
              id: 1,
              text: 'Featured',
              link: 'featured'
            },
            {
              id: 2,
              text: 'Insight',
              link: 'insight'
            },
            {
              id: 3,
              text: 'Opinion',
              link: 'opinion'
            },
            {
              id: 4,
              text: 'Story',
              link: 'story'
            },
          ])}
          renderRow={this.renderMenuItem}
        />
      </View>
    );
  }
});

module.exports = DrawerNavigationView;
