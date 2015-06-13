var { LinkingIOS, AlertIOS } = require('react-native');

var qs = require('shitty-qs');
var GitHubAPI = require('./github-api');

var config = require('../../config');
var githubClientID = config.github.client_id;

module.exports = {

  github: function(callback){

    var handleUrl = function(event) {
      var code = qs(event.url.match(/\?(.*)/)[1]).code;
      GitHubAPI.getAccessToken(code)
        .then((access_token) => {
          callback(access_token);
        })
      LinkingIOS.removeEventListener('url', handleUrl);
    };

    LinkingIOS.addEventListener('url', handleUrl);

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
