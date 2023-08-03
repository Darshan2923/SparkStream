const express = require("express");
const dotenv = require('dotenv');
const chats = require('./data/data');
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require('./routes/userRoutes')

//Now create instance of this express variable
dotenv.config();
connectDB();
const app = express();

// Now we can use this app variable to create a server

//Now we are creating an express.js API 


app.get("/", (req, res) => {
    res.send("API is running");
})


// creating another endpoint
app.get("/api/chat", (req, res) => {
    res.send(chats);
})

//we want a data from collection of objects with a specific id
//we create an another endpoint

app.get("/api/chat/:id", (req, res) => {
    // console.log(req);
    const singleData = chats.find((e) => {
        return e._id == req.params.id; //finding the object in array by its params.id -->params is an element in the array of object in the the request data
    })
    res.send(singleData);
})


// Adding an endpoint for user authentication

app.user('/api/user', userRoutes)

const PORT = process.env.PORT
// https://stackoverflow.com/questions/9164915/node-js-eacces-error-when-listening-on-most-ports

app.listen(5000, console.log(`Server is running`.yellow.bold));