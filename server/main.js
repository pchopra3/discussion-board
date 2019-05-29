import { Meteor } from 'meteor/meteor';
//import '/messageboard/client/main.js'
//import '/lib/collections.js';
//import '/client/main.js'
//import '/client/templates/add.html';
//import '/client/templates/messages.html';

Meteor.startup(() => {
  // code to run on server at startup
  Messages = new Mongo.Collection('messages');
  //const email = Meteor.user().emails[0].address;

});
//Messages = new Mongo.Collection('messages');



Meteor.methods({

   //var email = Meteor.user().emails[0].address;
   'messages.insert'(text, email){
    if(!Meteor.userId()){
      throw new Meteor.Error('not-authorized');
    }

    Messages.insert({
       text:text,
       createdAt: new Date(),
       email:email
    });
  }
//  console.log(email);

});
