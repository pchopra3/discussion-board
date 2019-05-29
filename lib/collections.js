import {Mongo} from 'meteor/mongo';
//import '/client/main.html';
import '/client/templates/add.html';
import '/client/templates/messages.html';

Messages = new Mongo.Collection('messages');
