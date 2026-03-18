import style from "./HumidityCard.module.css"

interface HumidityCardProps {
    humidity: number;
}

export default function HumidityCard({ humidity }: HumidityCardProps) {
    return (
        <div className={style.card}>
            <p className={style.header}>Humidity</p>
            <p className={style.humidityText}>{humidity}%</p>
        </div>
    )
}