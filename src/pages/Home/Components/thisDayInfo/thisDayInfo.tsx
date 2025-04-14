import s from "./thisDayInfo.module.scss";
import cloud from "../../../../assets/image/cloud.png";
import { ThisDayListInfo } from "./thisDayListInfo";

export const ThisDayInfo = () => {
  return (
    <div className={s.this__day__info}>
      <ThisDayListInfo/>
      <img src={cloud} className={s.cloud__img} alt="Облако" />
    </div>
  )
}