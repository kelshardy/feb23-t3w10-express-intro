const {app, HOST, PORT} = require('./Server');

// Activate the server -- happens all below this line vvvvvvv

app.listen(PORT, HOST, () => {
	console.log("Server is running on port: " + PORT);
});