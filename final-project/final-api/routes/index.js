const express = require("express");

const router = express.Router();

//Require FireBase
const firebase = require("firebase");
//Initialize Firestore Database:
const db = firebase.firestore();

//Reference to Collections
const posts = db.collection("posts");


router.get("/", (req, res) => {
    //Create empty array
    const postsArray = [];
    //Get Blog Posts
    posts
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data()}`);
            postsArray.push(doc.data()); //push each single obj into array
            });
            return res.send(postsArray);
        })
        .catch(function(error) {
            console.log("Error", error);
            return res.send(error);
        });
});

module.exports = router;