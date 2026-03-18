import style from "./LocationCard.module.css"

interface LocationCardProps {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

export default function LocationCard({ name, region, country }: LocationCardProps) {
    return (
        <div className={style.card}>
            <p className={style.name}>{name}</p>
            <p className={style.region}>{region}</p>
            <p className={style.country}>{country}</p>
        </div>
    )
}