import style from "./WindSpeedCard.module.css"

export default function WindSpeedCard(windspeed: number) {
    return (
        <div className={style.card}>
            <p className={style.header}>Wind Speed</p>
            <p className={style.windSpeed}>{windspeed}km/h</p>
        </div>
    )
}