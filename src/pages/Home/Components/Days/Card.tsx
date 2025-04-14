import s from "./Days.module.scss";
import { GlobalSvgSelect } from '../../../../assets/icons/global/GlobalSvgSelect';
import { Day } from "./Days";

interface Props {
    selectDay: Day;
}

export const Card = ({selectDay}: Props) => {
    const {day, day_info, icon_id, temp_day, temp_night, info} = selectDay
    return<div className={s.card}>
        <div className={s.day}>{day}</div>
        <div className={s.day__info}>{day_info}</div>
        <div className={s.img}>
            <GlobalSvgSelect id={icon_id}/>
        </div>
        <div className={s.temp__day}>{temp_day}</div>
        <div className={s.temp__night}>{temp_night}</div>
        <div className={s.info}>{info}</div>   
    </div>
}