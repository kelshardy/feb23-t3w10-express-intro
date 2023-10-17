// import the server package
const express = require('express');

// make an instance of the server that we can customize and run
const app = express();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
// Ports can only be an integer between 1001 - 65536

// some comment here to trigger nodemon into restarting

// GET localhost:3000/
// app.get(rout path, callback function)
app.get("/", (request, response) => {
    response.send("Hello world, this server is bananas!");
});

// configure te server -- happens all above this line ^^^^

// Activate the server -- happens all below this line vvvv

app.listen(PORT, HOST, () => {
    console.log("Server is running on port: " + PORT);
})