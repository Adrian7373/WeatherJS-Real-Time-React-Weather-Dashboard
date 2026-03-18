import style from "./WindSpeedCard.module.css"

interface WindSpeedCardProps {
    windspeed: number;
}

export default function WindSpeedCard({ windspeed }: WindSpeedCardProps) {
    return (
        <div className={style.card}>
            <p className={style.header}>Wind Speed</p>
            <p className={style.windSpeed}>{windspeed}km/h</p>
        </div>
    )
}