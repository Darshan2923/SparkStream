//we'll have the following fields :
// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin

// This line of code includes a special "mongoose" tool that helps us talk to the magical book.
const mongoose = require('mongoose');

// This line of code says we want to use a special part of "mongoose" called "Schema" to create our chats.
const { Schema } = mongoose;

// This line of code creates a new chat model using the "Schema" we just mentioned.
// It tells the book what information each chat should have.
const chatModel = new Schema({
    // This line says each chat should have a "chatName" which is a text (String) and it should be trimmed (no extra spaces).
    chatName: { type: String, trim: true },

    // This line says each chat should have an "isGroupChat" which is either true or false, and by default, it's false.
    // It means if it's a chat between many people (a group), we say true, otherwise, it's just between two people (single user) and we say false.
    isGroupChat: { type: Boolean, default: false },

    // This line says each chat should have a list of "users".
    // Each "user" is a special person we know, and they have a unique "ID" that helps us recognize them.
    users: [{
        type: Schema.Types.ObjectId, //Reference to a particular user ka id
        ref: "User", // This tells the book that each user is related to the "User" model we have in the magical book.
    }],

    // This line says each chat should have a "latestMessage".
    // A "message" is something that people write to each other in the chat.
    // The "latestMessage" is like a special bookmark that tells us which message is the most recent one in the chat.
    latestMessage: {
        type: Schema.Types.ObjectId,
        ref: "Message", // This tells the book that the "latestMessage" is related to the "Message" model in the magical book.
    },

    // This line says each chat should have a "groupAdmin".
    // If the chat is a group chat (isGroupChat is true), we might want to know who is the boss, like a leader.
    // So we tell the book the name of the person who is the boss in the group chat.
    groupAdmin: {
        type: Schema.Types.ObjectId,
        ref: "User", // This tells the book that the "groupAdmin" is related to the "User" model in the magical book.
    }
},
    // This part is like a special sticker we put on the chat to make it better.
    {
        timestamps: true, // It adds the time when the chat was created and the time when it was last updated.
    }
);

// This line of code tells the magical book that we have a new model called "Chat" and how each chat should look like (based on the chatModel we created above).
const Chat = mongoose.model("Chat", chatModel);

// This line of code says we want to use this "Chat" model in other parts of our code, so we export it to use it later.
module.exports = Chat;
