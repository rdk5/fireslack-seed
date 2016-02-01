angular.module('angularfireSlackApp')
.factory('Users', function($firebaseArray, $firebaseObject, $firebaseUrl){
  var userRef = new Firebase(firebaseUrl+'users');
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
    
    all: users
  };

  return Users;
});
