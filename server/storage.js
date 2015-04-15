
exports.messages = {};

var messagesArr = exports.messages.results = [];

// messages.results should have all messages sent to the server
// This is based on the test output saying:
//  1) server should send an object containing a `results` array:
     // Uncaught AssertionError: expected undefined to be an array

exports.post = function(data){
  data = JSON.parse(data);
  data.createdAt = Date.now(); // createdAt is the number of milliseconds from 1970
  messagesArr.push(data);
  if(!this.rooms[data.roomname]){
    this.rooms[data.roomname]= data.roomname;
  }
  if(!this.usernames[data.username]){
    this.usernames[data.username]= data.username;
  }
  console.log(messagesArr)
}

exports.get = function(dataSort){
  return this.messages;
}

exports.rooms = {messages: true};
exports.usernames = {};
