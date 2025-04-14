import s from "./Days.module.scss";
import { Card } from "./Card";
import { Tabs } from "./Tabs";

interface Props {}

export interface Day {
    id: number,
    day: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
}

export const Days = (props: Props) => {
    const days: Day[] = [
        {
            id: 0,
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            id: 1,
            day: 'Завтра',
            day_info: '28 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            id: 2,
            day: 'Пн',
            day_info: '28 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            id: 3,
            day: 'Вт',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            id: 4,
            day: 'Ср',
            day_info: '28 авг',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            id: 5,
            day: 'Чт',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            id: 6,
            day: 'Пт',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
    ]
    return(
        <>
            <Tabs />
            <div className={s.days}>
            {days.map((day) => (
                <Card key={day.id} selectDay={day} />
            ))}
            </div>
        </>
    )
}