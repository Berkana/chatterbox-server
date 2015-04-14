
exports.messages = {};

exports.messages.results = [];

// messages.results should have all messages sent to the server
// This is based on the test output saying:
//  1) server should send an object containing a `results` array:
     // Uncaught AssertionError: expected undefined to be an array

exports.post = function(data){
}

exports.get = function(){
  return this.messages;
}
