import style from "./LocationCard.module.css"

export default function LocationCard({ weatherData }) {
    return (
        <div className={style.card}>
            <p className={style.name}>{weatherData.location.name}</p>
            <p className={style.region}>{weatherData.location.region}</p>
            <p className={style.country}>{weatherData.location.country}</p>
        </div>
    )
}