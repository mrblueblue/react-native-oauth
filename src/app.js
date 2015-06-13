'use strict'

var React = require('react-native');
var oauth = require('./utils/oauth');
var config = require('../config.js');
var githubClientID = config.github;

var { 

  LinkingIOS,
  ListView, 
  TouchableOpacity, 
  View, 
  Text, 
  StyleSheet 

} = React;

class App extends React.Component {

  constructor(){
    super();

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {

      redirect: null,

      apis: ds.cloneWithRows([
        'Github',
        'Dropbox',
        'Google',
        'Facebook',
        'Twitter',
        'Yahoo',
        'Wordpress'
      ]),

      github_token: null

    };
  }

  render(){
    if (this.state.redirect){
      return (<Text>{this.state.redirect}</Text>)
    }
    return (
      <ListView 
        dataSource={this.state.apis}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }

  renderRow(api){
    return (
      <TouchableOpacity onPress={this.authenticate.bind(this, api)}>
        <View style={styles.authButton}>
          <Text style={styles.authText}>{api}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  authenticate(api){
    // invoke the proper api oauth function on click
    var invokeOAuth = oauth[api.toLowerCase()]
    invokeOAuth(this.handleAuthSuccess.bind(this));
  }

  handleAuthSuccess(token){
    console.log('*************', token)
    this.setState({ github_token: token, redirect: 'github' });
  }

}

var styles = StyleSheet.create({
  authText: {
    fontSize: 20,
    margin: 10
  },
  authButton: {
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     marginHorizontal: 5,
     marginVertical: 3,
     padding: 5,
     backgroundColor: '#EAEAEA',
     borderRadius: 3,
     paddingVertical: 10,
   },
});

module.exports = App;