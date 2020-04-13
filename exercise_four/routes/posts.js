const express = require("express");
const router = express.Router();
//Require FireBase
const firebase = require("firebase");
//Initialize Firestore Database:
const db = firebase.firestore();
//Reference to Collections
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => res.send("Please include a valid ID"));
router.get("/:id", (req, res) => {
    const queryId = req.params.id;
    blogposts
        .doc(queryId)
        .get()
        .then(function (doc) {
            if (doc.exists) {
                //console.log("Document Data:", doc.data());
                return res.send(doc.data());
            } else {
                //console.log("No such document!"); //doc data will be undefined in this case
                return res.send("No such document!");
            }
        })
        .catch(function (error) {
            console.log("Error:", error);
            return res.send(error);
        });
});

module.exports = router;