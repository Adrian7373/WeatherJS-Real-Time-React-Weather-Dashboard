import style from "./ConditionCard.module.css"

export default function ConditionCard({ weatherData }) {
    return (
        <div className={style.card}>
            <img className={style.conditionImage} src={`https:${weatherData.current.condition.icon}`} alt="weather condition" />
            <p className={style.conditionText}>{weatherData.current.condition.text}</p>
        </div>
    )
}