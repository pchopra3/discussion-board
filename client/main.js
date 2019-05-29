import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '/client/templates/add.html'
import '/client/templates/messages.html'
import '/lib/collections.js';

Template.messages.helpers({
  messages:function(){
    return Messages.find({}, {sort: {createdAt: -1}});
    //return Messages.find({},{text: -1,createdAt: -1, email:-1});
  }
});

Template.add.events({
  'submit #messageform'(event){
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;

    const email = Meteor.user().emails[0].address;

    /*Messages.insert({
       text:text,
       createdAt: new Date(),
       email:email
    });*/
    Meteor.call('messages.insert', text, email);

    return false;
  }
});

/*Meteor.methods({

  // var email = Meteor.user().emails[0].address;
   'messages.insert'(text){
    if(!Meteor.userId()){
      throw new Meteor.Error('not-authorized');
    }

    Messages.insert({
       text:text,
       createdAt: new Date(),
       email:Meteor.user().emails[0].address
    });
  }
//  console.log(email);

});*/
