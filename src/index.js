// import app from the server.js file
// because all server configuration happens over in that file
const {app} = require("./server.js");

// Get the PORT environment variable 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	// callback that runs when the server has successfully started
		console.log(`Server is running on http://localhost:${PORT}`);
});
