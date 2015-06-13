'use strict';

var React = require('react-native');
var NavigationBar = require('react-native-navbar');
var App = require('./src/app');

var { AppRegistry, NavigatorIOS, Navigator, View } = React;

class oauthExamples extends React.Component {
 
  renderScene(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });
    }

    return (
      <View style={{flex: 1}}>
        {navBar}
        <Component navigator={navigator} route={route} />
      </View>
    );
  }

  render() {
    return (
      <Navigator
        style={{flex: 1}}
        renderScene={this.renderScene}
        initialRoute={{
          component: App,
          navigationBar: <NavigationBar title="OAuth Examples"/>
        }}
      />
    );
  }

};

AppRegistry.registerComponent('oauthExamples', () => oauthExamples);
