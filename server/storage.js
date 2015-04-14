
exports.messages = {};

exports.messages.results = [
  {
    username: "Mr. Test",
    text: "This is a test.",
    roomname: "lobby",
    createdAt : "2011-08-20T02:06:57.931Z"
  }
];

// messages.results should have all messages sent to the server
// This is based on the test output saying:
//  1) server should send an object containing a `results` array:
     // Uncaught AssertionError: expected undefined to be an array

exports.post = function(data){
  data.createdAt = ; // call some sort of date generating function
}

exports.get = function(){
  return this.messages;
}
