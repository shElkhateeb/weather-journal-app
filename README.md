
# Weather-Journal App Project

## Overview
This project is an asynchronous web app that uses Web API and user data to dynamically update the UI using Node Express and asynchronous JavaScript. 

## Description
In this app the user seclects country and enters the ZIP Code of the area to get temperature in and enters feelings about the weather and after that presses the "Generate" button. The UI is updated and displays date, temperature and the user's feelings.
This project has 2 JavaScript files `server.js` file and `website/app.js` file.
The `server.js` file contains the local server side code and has GET and POST routes `app.get('/getData', returnProjectData);`, `app.post('/postData', addToProjectData)`;.
The `website/app.js` file has an event listener to the Generate button and when the user clicks the button it goes to `returnResultToUser()` function which saves the ZIP Code, country, and feelings values that user enters and then calls `getTemprature(baseURL, countryCode, zip, key, units)` to get the temperature from OpenWeatherMap API, then after the temperature is returned it calls the `postData` function to make a POST request to the local server and saves the data in `projectData` object in `server.js` and then it calls `changeUI('/getData')` to get data from server and then change the UI.

## Resources
### MDN
- [Response.json()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)

### W3schools
- [JSON - Introduction](https://www.w3schools.com/js/js_json_intro.asp)

### Stackoverflow
- [How can I check if a string is a valid number?](https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number)

### Developers.SuiteCommerce
- [Troubleshoot 'Uncaught SyntaxError: Unexpected token u in JSON at position 0'](https://developers.suitecommerce.com/troubleshooting-uncaught-syntaxerror-unexpected-token-u-in-json-at-position-0.html)

## Author
- Shorouk Elkhateeb