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

  interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  }

  interface Condition {
    text: string;
    icon: string;
    code: number
  }

  interface Current {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  }

  interface Response {
    location: Location;
    current: Current;
  }

  const [weatherData, setWeatherData] = useState<Response | null>(null);
  const [city, setCity] = useState<string>("");

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
        setError: Error("Geolocation not supported by browser.")
        return
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchInitialWeather(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          setError: Error(err.message);
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
              weatherData={weatherData.location}
            />
            <TemperatureCard
              temperature={weatherData.current.temp_c}
            />
          </div>
          <HumidityCard
            weatherData={weatherData.current.humidity}
          />
          <ConditionCard
            weatherData={weatherData.current.condition}
          />
          <WindSpeedCard
            windspeed={weatherData.current.wind_kph}
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
