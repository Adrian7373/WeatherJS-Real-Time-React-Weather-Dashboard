import style from "./TemperatureCard.module.css"

export default function TemperatureCard({ weatherData }) {
    return (
        <div className={style.card}>
            <p className={style.tempText}>{weatherData.current.temp_c}°C</p>
        </div>
    )
}