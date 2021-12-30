/* Global Variables */
const apiKey = '&appid=e393feb3daef62708efa0b27f3aece36';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const units = '&units=metric';  //degrees in celsius
let zipCode = '';

const generateButton = document.getElementById('generate');

let feeling = '';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1)+'.'+ d.getDate()+'.'+ d.getFullYear();

// Get temprature from OpenWeatherMap
const getTemperature = async (baseURL, zip, key, units)=>{
    //Get weather data from OpenWeatherMap api
        const res = await fetch(baseURL + zip + key + units);
    try {
        //Extract weather data object from response body
        const data = await res.json();
    
        const temperature = data.main.temp;
        return temperature;
    } catch (error) {
        console.log(error);
    }
}

//Post data to server
const postData = async (url = '', data = {})=>{
    //Make a post request to the server
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)  //Convert data to a JSON string
    });
}

//Get data from server and update UI
const changeUI = async (url = '')=>{
    //Get data from server
    const res = await fetch(url);
    try {
        //Extract object from response
        const data = await res.json();
        
        //Update UI
        document.getElementById('date').textContent = 'Date: ' + data.date;
        document.getElementById('temp').textContent = 'Temperature: ' + data.temperature;
        document.getElementById('content').textContent = 'Feeling: ' + data.userResponse;
    } catch (error) {
        console.log(error);
    }
}

//Main function
function returnResultToUser(){

    zipCode = document.getElementById('zip').value;

    //Check if user entered a 5-digit ZIP Code 
    if(!isNaN(zipCode) && zipCode.length === 5){
        feeling = document.getElementById('feelings').value;
        
        getTemperature(baseURL, zipCode, apiKey, units)
        .then(function(temp){
            postData('/postData', {temperature: temp, date: newDate, userResponse: feeling});
        })
        .then(function(){changeUI('/getData');});
    }
    //Alert if user didn't enter a ZIP Code
    else{
        alert('Please Enter a ZIP Code');
    }   
}

//Listen for a click to "generate" button
generateButton.addEventListener('click', returnResultToUser);

