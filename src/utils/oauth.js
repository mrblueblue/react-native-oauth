
var { LinkingIOS, AlertIOS } = require('react-native');

var config = require('../../config.js');
var githubClientID = config.github;

module.exports = {

  github: function(){
    LinkingIOS.openURL([
      'https://github.com/login/oauth/authorize',
      `?client_id=${githubClientID}`,
      '&redirect_uri=auth://example',
      '&state=antiestablishmentarianism'
    ].join(''));
  },

  google: function(){
  	AlertIOS.alert('Hey!', 'Still workin on it');
  },

  twitter: function(){
  	AlertIOS.alert('Hey!', 'Still workin on it');
  },

  dropbox: function(){
  	AlertIOS.alert('Hey!', 'Still workin on it');
  },

  facebook: function(){
  	AlertIOS.alert('Hey!', 'Still workin on it');
  },

  yahoo: function(){
  	AlertIOS.alert('Hey!', 'Still workin on it');
  },

  wordpress: function(){
  	AlertIOS.alert('Hey!', 'Still workin on it');
  }

};
