'use strict'

var React = require('react-native');
var oauth = require('./utils/oauth');

var { 

  ListView, 
  TouchableOpacity, 
  View, 
  Text, 
  StyleSheet 

} = React;

class App extends React.Component {

  constructor(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    super();
    this.state = {
      apis: ds.cloneWithRows([
        'Github',
        'Dropbox',
        'Google',
        'Facebook',
        'Twitter',
        'Yahoo',
        'Wordpress'
      ])
    };
  }

  render(){
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
    oauth[api.toLowerCase()]();
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