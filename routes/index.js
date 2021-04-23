var express = require('express');
var router = express.Router();
const tutorials = require("../controllers/tutorials.controller");
// import { route } from './users';

// Create a new Tutorial
router.post("/", tutorials.create);

// Retrieve all Tutorials
router.get("/", tutorials.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", tutorials.findOne);

// Update a Tutorial with id
router.put("/:id", tutorials.update);

// Delete a Tutorial with id
router.delete("/:id", tutorials.delete);

// Delete all Tutorials
router.delete("/", tutorials.deleteAll);
module.exports = router;

























// var firebase = require('firebase');
// //firebase
// var firebaseConfig = {
//   apiKey: "AIzaSyCMuxzjc2HdFLKGlQWyC0bgKsDoSul0HhM",
//   authDomain: "cabapi-12adf.firebaseapp.com",
//   projectId: "cabapi-12adf",
//   storageBucket: "cabapi-12adf.appspot.com",
//   messagingSenderId: "165303732559",
//   appId: "1:165303732559:web:ac7a278d73cd6d3d591d3a",
//   measurementId: "G-X7RV5MWSTX"
// };

// firebase.initializeApp(firebaseConfig);

// var database = firebase.database();

/* GET home page. */

// function writeUserData(PassengerName, Pickup, Destination, Fare) {
//   firebase.database().ref('rides/').set({
//     PassengerName: PassengerName,
//     Pickup: Pickup,
//     Destination: Destination,
//     Fare: Fare
//   });
// }