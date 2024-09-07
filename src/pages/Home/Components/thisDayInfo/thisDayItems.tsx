import { Item } from "./thisDayInfo"
import s from "./thisDayInfo.module.scss";

type Props = {
    item: Item,
}

export const thisDayItems = (props: Props) => {
  return (
    <div className={s.item}>
        <div className={s.indicator}>

        </div>
        <div className={s.indicator__name}>

        </div>
        <div className={s.indicator__value}>

        </div>
    </div>
  )
}