import style from "./HumidityCard.module.css"

export default function HumidityCard(humidity: number) {
    return (
        <div className={style.card}>
            <p className={style.header}>Humidity</p>
            <p className={style.humidityText}>{humidity}%</p>
        </div>
    )
}