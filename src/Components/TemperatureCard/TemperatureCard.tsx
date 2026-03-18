import style from "./TemperatureCard.module.css"

export default function TemperatureCard(temperature: number) {
    return (
        <div className={style.card}>
            <p className={style.tempText}>{temperature}°C</p>
        </div>
    )
}