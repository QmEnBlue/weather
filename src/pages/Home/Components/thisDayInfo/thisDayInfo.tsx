import s from "./thisDayInfo.module.scss";
import cloud from "../../../../assets/image/cloud.png";

type Props = {}

export interface Item {
  icon_id: string,
  name: string,
  value: string,
}

export const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  
  return (
    <div className={s.this__day__info}>
      <div className={s.this__day__info__items}>
        {items.map((item) => {
          return <ThisDayInfo/>
        })}
      </div>
      <img src={cloud} alt="Облако" />
    </div>
  )
}