import style from "./ConditionCard.module.css"

interface ConditionProps {
    text: string;
    icon: string;
    code: number
}

export default function ConditionCard({ text, icon }: ConditionProps) {
    return (
        <div className={style.card}>
            <img className={style.conditionImage} src={`https:${icon}`} alt="weather condition" />
            <p className={style.conditionText}>{text}</p>
        </div>
    )
}