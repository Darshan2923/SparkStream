const express = require("express");
const chats = require('./data/data')

//Now create instance of this express variable

const app = express();

// Now we can use this app variable to create a server

//Now we are creating an express.js API 


app.get("/", (req, res) => {
    res.send("API is running");
})


// creating another endpoint
app.get("/api/data", (req, res) => {
    res.send(chats);
})

//we want a data from collection of objects with a specific id
//we create an another endpoint

app.get("/api/data/:id", (req, res) => {
    // console.log(req);
    const singleData = chats.find((e) => {
        return e._id == req.params.id; //finding the object in array by its params.id -->params is an element in the array of object in the the request data
    })
    res.send(singleData);
})

app.listen(5000, console.log("Server is running"));