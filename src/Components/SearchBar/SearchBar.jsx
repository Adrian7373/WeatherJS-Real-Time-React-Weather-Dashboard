import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ searchCity }) {

    const [cityInput, setCityInput] = useState("");

    const pressEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            searchCity(cityInput);
        }
    }

    return (
        <div className={style.searchDiv}>
            <div className={style.searchBar}>
                <input type="text" value={cityInput} className={style.searchInput} onChange={(e) => {
                    setCityInput(e.target.value)
                }} onKeyDown={pressEnter} placeholder="Enter city name" />
                <button className={style.searchButton} onClick={() => searchCity(cityInput)}>Search</button>
            </div>
        </div>
    )
}