import React from "react";
import axios from "axios"; // abstraction, axios itself is type object

//API Keys
const defaultKey = "907e284f9bbdde9955ea5e58beec13fe";

function Home(){
    return (
        <div className="Home">
            <h1>Weather in City</h1>
            <div className = "WeatherInfo">

                <div className = "WeatherInfo_Img">
                    <img src="" alt="" />
                </div>

                <div className = "WeatherInfo_Data">
                    <div className="CurrentTemperature">
                        <p>48&#176;</p>
                    </div>

                    <div className="OtherTemperatures">
                        <p>High Temp: <strong>50&#176;</strong></p>
                        <p>Low Temp: <strong>30&#176;</strong></p>
                    </div>

                    
                    <p>Humidity: 50&#176;</p>
                    <p>Wind: 50&#176;</p>

                </div>

            </div>
        </div>
    );
}

export default Home;