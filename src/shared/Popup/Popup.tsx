import s from "./Popup.module.scss";
import { GlobalSvgSelect } from '../../assets/icons/global/GlobalSvgSelect';
import { ThisDayListInfo } from "../../pages/Home/Components/thisDayInfo/thisDayListInfo";
import { useEffect, useState } from "react";
import { useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors";


export const Popup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {weather} = useCustomSelector(selectCurrentWeatherData)
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  
  return (
    <div className={s.blur}>
      <div className={s.popup}>
        <div>
        <div className={s.this__day}>
                <div className={s.style}>
                    <div className={s.top__block__wrapper}>
                        <div>
                            <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
                            <div className={s.this__day__day}>Сегодня</div>
                        </div>
                        <GlobalSvgSelect id='sun'/>
                    </div>  
                </div>
                <div className={s.button__style}>
                    <div className={s.this__time}>Время: <span>22:22</span></div>
                    <div className={s.this__city}>город: <span></span></div>
                </div>
            </div>
        </div>
        <ThisDayListInfo/>
        <div className={s.close} onClick={handleClose}>
          <GlobalSvgSelect id="close"/>
        </div>
      </div>
    </div>
  )
}