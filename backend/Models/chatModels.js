//we'll have the following fields :
// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin

const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatModel = new mongoose.Schema({
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false }, //if it's a single user conversation then false else
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    },],
    latestMessage: {
        type: Schema.Types.ObjectId,
        ref: "Message",
    },
    groupAdmin: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
},
    {
        timestamps: true,
    }

);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;