import style from "./WindSpeedCard.module.css"

export default function WindSpeedCard({ weatherData }) {
    return (
        <div className={style.card}>
            <p className={style.header}>Wind Speed</p>
            <p className={style.windSpeed}>{weatherData.current.wind_kph}km/h</p>
        </div>
    )
}