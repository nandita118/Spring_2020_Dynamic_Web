import React, {useState, useEffect, Component} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useParams} from "react-router-dom";

import mtaDATA from "../components/fareDATAnew";

//Failed API Attempts -- no key needed for final: http://nycpulse.herokuapp.com/api
//const defaultCoronaKey = 
//const defaultMTAKey = "ef2bad6edf144d60932c8e1b957eca74" -- CORS error, invalid data type
//const defaultCurrents = "xIofCa9ddaEui6uxf8hdM8gSs6YVggYqcJTPBRh1Zyso78Rl" -- 502 server error


function Home () {

//Correcting CORS error on MTA API
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

    //Using Fare Data
    const [station, setStation] = useState({});
    const [fareusage, setFareUsage] = useState({});

    //Using API
    const [borough, setBorough] = useState(null); // uses useHistory to get from url
    const [northmta, setNorthMTA] = useState({}); //data for north mta train
    const [southmta, setSouthMTA] = useState({}); //data for south mta train
    const [stationname, setStationName] = useState({}); //sets station name using API
    const [longitude, setLong] = useState({});
    const [latitude, setLat]= useState({});
    

    const [idn, setIDN] = useState({});
    const [ids, setIDS] = useState({});

    let history = useHistory();

    let {id} = useParams();
    //console.log("RENDERING", station)

    // useEffect(() => {
    //     let dataArray = mtaDATA.filter(station => station.id === id); //check array.filter mdn for more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    //     console.log("dataArray", dataArray);
    //     //setStation(dataArray[1]);
    // }, [id]);

    // console.log(station);

    useEffect(() => {
        //Get borough from url
        let searchParams = history.location.search;
        let urlParams = new URLSearchParams(searchParams);
        let borough = urlParams.get("borough");
        if (borough) {
            setBorough(borough);
        } else {
            setBorough("Manhattan");
        }
    }, [history]);

    useEffect(() => { //sets the ID of the north mta buses and south mta buses to be used in the API get call
        let dataArray = mtaDATA.filter(station => station.id === id);
        //Set id based on borough
        if (borough==="Bronx") {
            setIDN("407N");
            setIDS("407S");
            setStation(dataArray[2]);
            setFareUsage(dataArray[2].fareCount[0]);
            
        } else if (borough==="Brooklyn") {
            setIDN("R29N");
            setIDS("R29S");
            setStation(dataArray[3]);
            setFareUsage(dataArray[3].fareCount[0]);
        } else if (borough==="Queens") {
            setIDN("709N");
            setIDS("709S");
            setStation(dataArray[4]);
            setFareUsage(dataArray[4].fareCount[0]);
        } else {
            setIDN("902N");
            setIDS("902S");
            setStation(dataArray[1]);
            setFareUsage(dataArray[1].fareCount[0]);
        }
    }, [borough, id]);

    useEffect(() => {
        // //Make a request for the weather by borough
        // const id = ({ borough }) => { //gives id of specific N/S station in borough we are looking at
        //     //console.log("weatherType", weatherType);
        //     switch (borough) {
        //         case "Bronx":
        //             setID("407N");
        //         case "Brooklyn":
        //             setID("R29N");
        //         case "Queens":
        //             setID("709N");
        //         case "Manhattan":
        //             setID("902N");
        //         default:
        //             setID("902N");
        //     }
        // };
        // console.log(id);

        if (idn && borough) {
            axios
                .get(
                    `http://mtaapi.herokuapp.com/api?id=${idn}`
                )
                .then(function(response){
                    //handle success
                    setNorthMTA(response.data);
                    console.log(response.data)
                })
                .catch(function(error){
                    //handle error
                    console.log(error);
                });
        }
    }, [idn, borough]);

        useEffect(() => {
        // //Make a request for the weather by borough
        // const id = ({ borough }) => { //gives id of specific N/S station in borough we are looking at
        //     //console.log("weatherType", weatherType);
        //     switch (borough) {
        //         case "Bronx":
        //             return "407S";
        //         case "Brooklyn":
        //             return "R29S";
        //         case "Queens":
        //             return "709S";
        //         case "Manhattan":
        //             return "902S";
        //         default:
        //             return "902S";
        //     }
        // };
        // console.log(id);
        if (ids && borough) {
            axios
                .get(
                    `http://mtaapi.herokuapp.com/api?id=${ids}`
                )
                .then(function(response){
                    //handle success
                    setSouthMTA(response.data);
                    console.log(response.data)
                })
                .catch(function(error){
                    //handle error
                    console.log(error);
                });
            
        }
    }, [ids, borough]);

   useEffect(() => {
        if (southmta.result) {
            setStationName(southmta.result.name);
            setLong(southmta.result.lon);
            setLat(southmta.result.lat);

           

        }
    }, [southmta]);

            console.log(longitude)
            console.log(latitude)
            console.log(stationname)

    return(
        <div className="SiteWrapper">
            {/* <Header /> */}
            <div className="Home">
                <h1>in {borough}</h1>

                    <div className = "Station_Data">
                        <div className="Location">
                            <p>Longitude: {longitude}&#176;</p>
                            <p>Latitude: {latitude}&#176;</p>
                        </div>

                        <div className="Usage">
                            <p>Riders from March 14, 2020 to March 20, 2020: <strong>{fareusage}</strong></p>
                        </div>

                    </div>
                
            </div>
        </div>
    );
}

export default Home;

//Other Helpful Resources:
// https://medium.com/javascript-in-plain-english/react-hooks-how-to-use-useeffect-ecea3e90d84f
// https://www.robinwieruch.de/conditional-rendering-react