import style from "./HumidityCard.module.css"

export default function HumidityCard({ weatherData }) {
    return (
        <div className={style.card}>
            <p className={style.header}>Humidity</p>
            <p className={style.humidityText}>{weatherData.current.humidity}%</p>
        </div>
    )
}