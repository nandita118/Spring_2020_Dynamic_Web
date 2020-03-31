import React, {useState, useEffect, Component} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

//const defaultCoronaKey = 

//const defaultMTAKey = "ef2bad6edf144d60932c8e1b957eca74"
const defaultCurrents = "xIofCa9ddaEui6uxf8hdM8gSs6YVggYqcJTPBRh1Zyso78Rl"


function Home () {
//from https://github.com/Rob--W/cors-anywhere 
    // let cors_api_host = `cors-anywhere.herokuapp.com`;
    // let cors_api_url = 'https://' + cors_api_host + '/';
    // let slice = [].slice;
    // let origin = window.location.protocol + '//' + window.location.host;
    // let open = XMLHttpRequest.prototype.open;
    // XMLHttpRequest.prototype.open = function() {
    //     let args = slice.call(arguments);
    //     let targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
    //     if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
    //         targetOrigin[1] !== cors_api_host) {
    //         args[1] = cors_api_url + args[1];
    //     }
    //     return open.apply(this, args);
    // };

    
    //const [mtaData, setMTAData] = useState({});
   // const [station, setStation] = useState(null);
    const [currentsData, setCurrentsData] = useState({});

    let history = useHistory();

    axios
        .get (
           // `http://datamine.mta.info/mta_esi.php?key=${defaultMTAKey}&feed_id=21`
            `https://api.currentsapi.services/v1/latest-news?language=us&apiKey=${defaultCurrents}`
        )
        .then(function(response){
            //setMTAData(response.data);
            //setCurrentsData(response.data);
            console.log("Response",response.json())
        })
        .catch(function(error){
            console.log(error);
        })

    // var url = 'https://api.currentsapi.services/v1/search?domain=zdnet.com&keywords=Amazon&language=en' +
    //             'country=us&' +
    //             'apiKey=xIofCa9ddaEui6uxf8hdM8gSs6YVggYqcJTPBRh1Zyso78Rl';
    // var req = new Request(url);
    // fetch(req)
    //     .then(function(response) {
    //         console.log(response.json());
    //     })

    return(
        <h1>It works!</h1>
    )
    }

export default Home;