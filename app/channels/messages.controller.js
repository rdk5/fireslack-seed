angular.module('angularfireSlackApp')
.controller('MessageCtrl', function(profile, channelName, message){
  var messageCtrl = this;

  messageCtrl.messages = messages;
  messageCtrl.channelName = channelName;

  messageCtrl.message = '';

  messageCtrl.sendMessage = function(){
    if(messagesCtrl.message.length > 0){
      messageCtrl.messages.$add({
        uid: profile.$id,
        body: messageCtrl.message,
        timestamp: Firebase.ServerValue.TIMESTAMP
      }).then(function.message = '';
    )};
  }
});
