import React, {useState, useEffect, Component} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

//const defaultCoronaKey = 

const defaultMTAKey = "ef2bad6edf144d60932c8e1b957eca74"

function Home () {
    const [mtaData, setMTAData] = useState({});
   // const [station, setStation] = useState(null);

    let history = useHistory();

    axios
        .get (
            `https://datamine.mta.info/mta_esi.php?key=${defaultMTAKey}`
        )
        .then(function(response){
            setMTAData(response.data);
            console.log(mtaData)
        })
        .catch(function(error){
            console.log(error);
        })

    return(
        <h1>It works!</h1>
    )
    }

export default Home;