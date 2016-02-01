angular.module('angularfireSlackApp')
.controller('ChannelCtrl', function($state, Auth, Users, profile, channels){
  var channelsCtrl = this;

  channelsCtrl.profile = profile;
  channelsCtrl.channels = channels;
  channelsCtrl.getDisplayName = Users.getDisplayName;
  channelsCtrl.getGravatar = Users.getGravatar;

  //Allows user's to log out and return to home state
  channelCtrl.logout = function(){
    Auth.$unauth();
    $state.go('home');
  };

  channelCtrl.newChannel = {
    name: ''
  };

  channelsCtrl.createChannel = function(){
  channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(){
    channelsCtrl.newChannel = {
      name: ''
    };
  });
};

});
