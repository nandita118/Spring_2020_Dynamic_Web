import React, { useState, useEffect } from "react";
import axios from "axios"; // abstraction, axios itself is type object

//API Keys
const defaultKey = "907e284f9bbdde9955ea5e58beec13fe";

function Home(){

    const [weatherData, setWeatherData]= useState({});
    const [city, setCity] = useState(`Seoul`);
    const [currentTemperature, setCurrentTemperature] = useState('');
    const [highTemp, setHighTemp] = useState('');
    const [lowTemp, setLowTemp] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');

    useEffect(() => {
        //Make a request for the weather by city
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
    }, []); //square brackets at the end is called 'hook' - when variables in it, function useEffect will run when any variable changes

    useEffect(() => {
        if (weatherData.main) {
            setCurrentTemperature(weatherData.main.temp);
            setHighTemp(weatherData.main.temp_max);
            setLowTemp(weatherData.main.temp_min);
            setHumidity(weatherData.main.humidity);
            setWind(weatherData.wind.speed);
        }
    }, [weatherData]);

    console.log("weatherData", weatherData);

    return (
        <div className="Home">
            <h1>Weather in {city}</h1>
            <div className = "WeatherInfo">

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
    );
}

export default Home;