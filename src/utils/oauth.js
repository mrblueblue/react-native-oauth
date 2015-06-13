
var { LinkingIOS } = require('react-native');

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
  }

};
