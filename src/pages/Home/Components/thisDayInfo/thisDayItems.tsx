import { IndicatorsSvgSelect } from "../../../../assets/icons/indicators/IndicatorsSvgSelect";
import s from "./thisDayInfo.module.scss";

interface Item {
  icon_id: string,
  name: string,
  value: string,
}


export const ThisDayItems = ({ item }: {item: Item}) => {
  const { icon_id, name, value } = item;
  return (
    <div className={s.item}>
        <div className={s.indicator}>
          <IndicatorsSvgSelect id={icon_id}/>
        </div>
        <div className={s.indicator__name}>
          {name}
        </div>
        <div className={s.indicator__value}>
          {value}
        </div>
    </div>
  )
}