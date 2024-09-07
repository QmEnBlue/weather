import s from "./thisDay.module.scss";
import { GlobalSvgSelect } from '../../../../assets/icons/global/GlobalSvgSelect';

type Props = {}


export const ThisDay = (props: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block__wrapper}>
          <div className={s.this__temp}>
            20°
          </div>
          <div className={s.this__day__day}>
            Сегодня
          </div>
        </div>  
        <GlobalSvgSelect id='sun'/>
      </div>
      <div className={s.buttom__block}>
        <div className={s.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.this__city}>
          город: <span>Пенза</span>
        </div>
      </div>
    </div>
  )
}