import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
//Pages
import UserProfile from "./containers/UserProfile";
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import Header from "./components/Header";
//Styling
import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInformation, setUserInformation] = useState({})

  const firebaseConfig = { //later this would be in .env file ...
    apiKey: "AIzaSyBzY0xxUlDaXOSL-Xk2881AM9EocKq30do",
    authDomain: "exercise-five-6654e.firebaseapp.com",
    databaseURL: "https://exercise-five-6654e.firebaseio.com",
    projectId: "exercise-five-6654e",
    storageBucket: "exercise-five-6654e.appspot.com",
    messagingSenderId: "530849322378",
    appId: "1:530849322378:web:c3d4ea0aeff55bb8d5e473"
  };

  //1. Ensure app is initialized when it is ready to be
  //2. Ensure app is not initialized more than once
  useEffect(()=> {
    //is firebase already initialized?
    if(!firebase.apps.length){
      //Initialize firebase
      firebase.initializeApp(firebaseConfig);
    }
    //Setting auth to be persistent in SESSION storage, not cookies
    //You can also use cookies with firebase but we're using session bc its easier to work with
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function(e) {
        console.log("INSTANTIATING AUTH ERROR", e);
      });
  }, [firebaseConfig]);

  //Check to see if the User is loggen in 
  //User loads page, check their status
  //Set state accordingly

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user){
      if(user) {
        //Logged in
        setUserInformation(user);
        setLoggedIn(true);
      } else {
        //Not logged in
        setUserInformation({});
        setLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);




  //Login
  function LoginFunction(e) {
    e.preventDefault();
    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response) {
        console.log("LOGIN RESPONSE", response);
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log("LOGIN ERROR", error);
      });
  }

  //Logout
  function LogoutFunction() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setLoggedIn(false);
      })
      .catch(function(error) {
        console.log("LOGOUT ERROR", error);
      });
  }

  //Create Account
  function CreateAccountFunction(e) {
    e.preventDefault();
    console.log("form payload", e);
    //Default values for testing
    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(response) {
        console.log('VALID ACCOUNT CREATED', response);
        setLoggedIn(true);
      })
      .catch(function(e) {
        console.log("CREATE ACCOUNT ERROR", e);
      });
  }


  //if (loading) return null;

  return (
    <div className="App">
      <Header LogoutFunction={LogoutFunction} isLoggedIn={loggedIn}/>
      <Router>
        <Route exact path="/">
          {!loggedIn ? (
            <Redirect to="/login"/>
          ) : (
            <UserProfile userInformation={userInformation}/>
          )}
        </Route>
        <Route exact path="/login">
          {!loggedIn ? (
            <Login LoginFunction={LoginFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/create-account">
          {!loggedIn ? (
            <CreateAccount CreateAccountFunction={CreateAccountFunction}/>
          ) : (
            <Redirect to="/" />
          )} 
          {/* passed in a function as a prop, from function above */}
        </Route>
      </Router>
    </div>
    
  );
}

export default App;
