angular.module('angularfireSlackApp')
.controller('ChannelCtrl', function($state, Auth, Users, profile, channels){
  var channelsCtrl = this;

  channelsCtrl.profile = profile;
  channelsCtrl.channels = channels;
  channelsCtrl.users = Users.all;
  channelsCtrl.getDisplayName = Users.getDisplayName;
  channelsCtrl.getGravatar = Users.getGravatar;

  //Allows user's to log out and return to home state
      channelsCtrl.logout = function () {
          channelsCtrl.profile.online = null;
          channelsCtrl.profile.$save().then(function () {
              Auth.$unauth();
              $state.go('home');
          });
      };

  channelCtrl.newChannel = {
    name: ''
  };

  channelsCtrl.createChannel = function () {
          channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function (ref) {
              $state.go('channels.messages', { channelId: ref.key() });
          });
      };
//set current users online
Users.setOnline(profile.$id);
});
