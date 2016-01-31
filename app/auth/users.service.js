angular.module('angularfireSlackApp')
.factory('Users', function($firebaseArray, $firebaseUrl){
  var usersRef = new Firebase(FirebaseURl+'users');
  var users = $firebaseArray(usersRef);

  var Users = {
  getProfile: function(uid){
    return $firebaseObject(usersRef.child(uid));
  },
  getDisplayName: function(uid){
    return users.$getRecord(uid).displayName;
  },
  all: users
};

  return Users;
});
