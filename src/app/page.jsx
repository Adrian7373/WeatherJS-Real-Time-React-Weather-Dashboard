"use client";

import { useEffect, useState } from "react";
import LocationCard from "@/Components/LocationCard/LocationCard";
import HumidityCard from "@/Components/HumidityCard/HumidityCard";
import ConditionCard from "@/Components/ConditionCard/ConditionCard";
import TemperatureCard from "@/Components/TemperatureCard/TemperatureCard";
import WindSpeedCard from "@/Components/WindSpeedCard/WindSpeedCard";
import SearchBar from "@/Components/SearchBar/SearchBar";
import style from "./page.module.css";

export default function Home() {

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
        try {
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key={YOUR_API_KEY_HERE}`);
          const data = await response.json();
          setWeatherData(data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchWeather();
    }
  }, [city]);

  useEffect(() => {
    const fetchInitialWeather = async (lat, long) => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${lat},${long}&key={YOUR_API_KEY_HERE}`);
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        console.log(err);
      }
    }

    const getCoordinates = () => {
      if (!navigator.geolocation) {
        setError("Geolocation not supported by browser.")
        return
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchInitialWeather(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          setError(err.message);
        }
      )
    }
    getCoordinates()
  }, []);

  const searchCity = (cityName) => {
    setCity(cityName);
  }

  return (
    <div className={style.mainDiv}>
      {weatherData ? (
        <>
          <SearchBar
            searchCity={searchCity}
          />
          <div className={style.locTemp}>
            <LocationCard
              weatherData={weatherData}
            />
            <TemperatureCard
              weatherData={weatherData}
            />
          </div>
          <HumidityCard
            weatherData={weatherData}
          />
          <ConditionCard
            weatherData={weatherData}
          />
          <WindSpeedCard
            weatherData={weatherData}
          />
        </>
      ) : (
        <div>
          <SearchBar
            searchCity={searchCity}
          />
        </div>
      )}
    </div>
  )

}
