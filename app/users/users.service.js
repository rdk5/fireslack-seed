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
    all: users
  };

  return Users;
});
