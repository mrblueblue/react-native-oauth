# react-native-oauth

*Click an OAuth API, and see it in action on React-Native.* 

Currently supports the Github OAuth API.

Other OAuth API's planned for integration:

* Dropbox
* Facebook
* Google
* Twitter

Please note: as it stands now, the App will only work if you register your own client ID's for the API's!

# How to Implement OAuth in React-Native

Using Github as an example, we create a function that does the following:

```javascript

LinkingIOS.openURL([
  'https://github.com/login/oauth/authorize',
  `?client_id=${githubClientID}`,
  '&redirect_uri=auth://example',
  '&state=antiestablishmentarianism'
].join(''));

```

`LinkingOIS` will open the URL specificied in Safari. Upon successfull authentication, the user will be directed to the callback URL defined (in this case is `auth://example`).

In order for this to work properly, a custom URL scheme must be set for the App in the Xcode file `Info.plist`

This custom URL scheme must match the callback URL you registered with the Github API!
