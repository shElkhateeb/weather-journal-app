// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8080;
const server = app.listen(port, listening);

//GET route
app.get('/getData', returnProjectData);

//POST route
app.post('/postData', addToProjectData);

function listening(){
    console.log(`server is running on localhost: ${port}`);
}

function returnProjectData(request, response){
    response.send(projectData);
}

function addToProjectData(request, response){
    projectData = request.body;
}