const express = require('express') //object (essentially everything in js is an object -- has depth, types, etc)
//Initiate express to app
const app = express(); 
//Set the Port
const port = process.env.PORT || 4000; 

//Require FireBase
const firebase = require("firebase");
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFkPF84J_bPKYKlC-sA25QLg_Gk06udEs",
    authDomain: "final-project-sp2020-647fc.firebaseapp.com",
    databaseURL: "https://final-project-sp2020-647fc.firebaseio.com",
    projectId: "final-project-sp2020-647fc",
    storageBucket: "final-project-sp2020-647fc.appspot.com",
    messagingSenderId: "859214890117",
    appId: "1:859214890117:web:a8323b801f5e2c96fcd5ec"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index.js');
//const aboutRoute = require('./routes/about.js');

// Serve Static Files -- should be as high as possible
app.use("/static", express.static("public"));
// Routing in Express
app.use("/", indexRoute);
//app.use("/about", aboutRoute);

//always put this at the bottom --> 
app.listen(port,  () => console.log("Final API Running!")); //function being called