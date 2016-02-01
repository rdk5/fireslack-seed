angular.module('angularfireSlackApp')
.factory('Users', function($firebaseArray, $firebaseObject, $firebaseUrl){
  var usersRef = new Firebase(FirebaseUrl+'users');
  var connectedRef = new Firebase(FirebaseUrl+'.info/connected');
  var users = $firebaseArray(userRef);

  var Users = {
    getProfile: function(uid){
      return $firebaseObject(userRef.child(uid));
    },
    getDisplayName: function(uid){
      return users.$getRecord(uid).displayName;
    },
    getGravatar: function(uid){
      return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
    },
    setOnline: function(uid){
      var connected = $firebaseObject(connectedRef);
      var online = $firebaseArray(usersRef.child(uid+'/online'));

      connected.$watch(function (){
        if(connected.$value === true){
          online.$add(true).then(function(connectedRef){
            connectedRef.onDisconnect().remove();
          });
        }
      });
    }   

    all: users
  };

  return Users;
});
