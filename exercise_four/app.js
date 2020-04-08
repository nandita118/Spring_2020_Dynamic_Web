//Import express
const express = require('express') 
//Initiate express to app
const app = express();
//Set the Port
const port = process.env.PORT || 4000; //number variable

//Require FireBase
const firebase = require("firebase");
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

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Initialize Firestore Database:
const db = firebase.firestore();

//Create empty array
const blogpostsArray = [];
//Get Blog Posts
const blogposts = db
  .collection('blogposts')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      blogpostsArray.push(doc.data()); //push each single obj into array
    });
  })
  .catch(function(error) {
    console.log("Error", error);
  });

//Create base route
app.get("/", (req, res) => res.send(blogpostsArray)); //sending array (json)

//Set up app so that it runs when this file is run
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port} `)
    );

//make midterms private -- people scan for API keys
//go into gitignore, create .env file, put api key in there