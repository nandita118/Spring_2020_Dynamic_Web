//Import express
const express = require('express') 
//Initiate express to app
const app = express();
//Set the Port
const port = process.env.PORT || 4000; //number variable

//Require FireBase
const firebase = require("firebase/app");
//Get config obj so we can communicate w firebase
const firebaseConfig = {
    apiKey: "AIzaSyCQcnWDZCnTXkVmjm66hxFYUKtdf53r4vw", //this is incredibly insecure, but just for learning, lets do
    authDomain: "exercise-four-64892.firebaseapp.com",
    databaseURL: "https://exercise-four-64892.firebaseio.com",
    projectId: "exercise-four-64892",
    storageBucket: "exercise-four-64892.appspot.com",
    messagingSenderId: "816095527446",
    appId: "1:816095527446:web:d6f0e38ca527ad90ac6b37"
  };

//Create base route
app.get('/', (req, res) => res.send("Exercise Four")); 

//Set up app so that it runs when this file is run
app.listen(port, () =>
    console.log(`Example app listening at http://localhost: ${port} `)
    );

//make midterms private -- people scan for API keys
//go into gitignore, create .env file, put api key in there