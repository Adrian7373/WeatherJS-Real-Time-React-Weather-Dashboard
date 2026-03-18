import style from "./TemperatureCard.module.css"

interface TemperatureCardProps {
    temperature: number;
}

export default function TemperatureCard({ temperature }: TemperatureCardProps) {
    return (
        <div className={style.card}>
            <p className={style.tempText}>{temperature}°C</p>
        </div>
    )
}