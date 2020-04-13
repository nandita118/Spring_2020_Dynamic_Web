const express = require("express");
const router = express.Router();
//Require FireBase
const firebase = require("firebase");
//Initialize Firestore Database:
const db = firebase.firestore();

//Reference to Collections
const blogposts = db.collection("blogposts");


router.get("/", (req, res) => {
    //Create empty array
    const blogpostsArray = [];
    //Get Blog Posts
    blogposts
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data()}`);
            blogpostsArray.push(doc.data()); //push each single obj into array
            });
            return res.send(blogpostsArray);
        })
        .catch(function(error) {
            console.log("Error", error);
            return res.send(error);
        });
});

module.exports = router;