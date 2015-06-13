'use strict'

var config = require('../../config.js');

module.exports = {

  getAccessToken: function(code){ 
    return fetch('https://github.com/login/oauth/access_token', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: code,
        client_id: config.github.client_id,
        client_secret: config.github.client_secret
      })
    }).then((response) => {
      var access_token = JSON.parse(response._bodyInit).access_token;
      return access_token;
    })
  }

};
