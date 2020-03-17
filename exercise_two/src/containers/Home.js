import React, { useState, useEffect, Component } from "react";
import axios from "axios"; // abstraction, axios itself is type object

import { useHistory } from "react-router-dom";

//import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";


//API Keys
const defaultKey = "907e284f9bbdde9955ea5e58beec13fe";

function Home(){

    const [weatherData, setWeatherData]= useState({});
    const [city, setCity] = useState(null);

    const [cloudiness, setCloudiness] = useState(0);
    const [currentTemperature, setCurrentTemperature] = useState('');
    const [highTemp, setHighTemp] = useState('');
    const [lowTemp, setLowTemp] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');
    const [weatherType, setWeatherType] = useState("Clouds");

    let history = useHistory();
    //let searchParams = history.location.search;

    useEffect(() => {
        //Get city from url
        let searchParams = history.location.search;
        let urlParams = new URLSearchParams(searchParams);
        let city = urlParams.get("city");
        if (city) {
            setCity(city);
        } else {
            setCity("Tokyo");
        }
    }, [history]);

    useEffect(() => {
        //Make a request for the weather by city
        if (city) {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${defaultKey}`
                )
                .then(function(response){
                    //handle success
                    setWeatherData(response.data);
                })
                .catch(function(error){
                    //handle error
                    console.log(error);
                });
        }
    }, [city]); //square brackets at the end is called 'hook' - when variables in it, function useEffect will run when any variable changes

    useEffect(() => {
        if (weatherData.main) {
            setCurrentTemperature(weatherData.main.temp);
            setHighTemp(weatherData.main.temp_max);
            setLowTemp(weatherData.main.temp_min);

            let cloudinessValue = weatherData.clouds.all / 200
            setCloudiness(cloudinessValue);

            setHumidity(weatherData.main.humidity);
            setWind(weatherData.wind.speed);
            
            setWeatherType(weatherData.weather[0].main);
        }
    }, [weatherData]);

    //console.log("weatherData", weatherData);

    return (
        <div
            className="SiteWrapper"
            style={{ backgroundColor: `rgba(0,0,0,${cloudiness})`}}>

            {/* <Header /> */}
            <div className="Home">
                <h1>Weather in {city}</h1>
                <div className = "WeatherInfo">
                    <WeatherImage weatherType = {weatherType} />
                    
                    <div className = "WeatherInfo_Img">
                        <img src="" alt="" />
                    </div>

                    <div className = "WeatherInfo_Data">
                        <div className="CurrentTemperature">
                            <p>{currentTemperature}&#176;</p>
                        </div>

                        <div className="OtherTemperatures">
                            <p>High Temp: <strong>{highTemp}&#176;</strong></p>
                            <p>Low Temp: <strong>{lowTemp}&#176;</strong></p>
                        </div>

                        
                        <p>Humidity: {humidity}%</p>
                        <p>Wind: {wind}mph</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;