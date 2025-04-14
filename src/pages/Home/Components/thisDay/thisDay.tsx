import { useEffect, useState } from 'react';
import { GlobalSvgSelect } from '../../../../assets/icons/global/GlobalSvgSelect';
import { Weather } from '../../../../store/types';
import s from "./thisDay.module.scss";

interface Props {
    weather: Weather;
}

interface Option {
    value: string;
    label: string;
  }
  
  const options: Option[] = [
    { value: 'Penza', label: 'Пенза' },
    { value: 'Moscow', label: 'Москва' },
    { value: 'Anapa', label: 'Анапа' },
    { value: 'Neftekamsk', label: 'Нефтекамск' },
  ]

export const ThisDay = ({weather}: Props) => {
    const [time, setTime] = useState('');
    const cityLabel = getCityLabel(weather.name)

    const timeWorld = () => {
        const now = new Date();
        let hours = Number(now.getUTCHours().toString().padStart(2, '0')) + weather.timezone / 3600;
        let minutes = now.getUTCMinutes().toString().padStart(2, '0');

        if (hours >= 24) {
            hours -= 24;
        }

        return `${hours}:${minutes}`;
    }
    function getCityLabel(cityValue: string): string | undefined{
        const option = options.find(option => option.value === cityValue);
        return option ? option.label : undefined;
    }

    useEffect(() => {
        const updatedTime = timeWorld();
        setTime(updatedTime);

        const interval = setInterval(() => {
            setTime(timeWorld());
        }, 60000);

        return () => clearInterval(interval);
    }, [weather.timezone]);
    
    return(
        <>
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
                    <div className={s.this__time}>Время: <span>{timeWorld() || 'Не указан город.'}</span></div>
                    <div className={s.this__city}>Город: <span>{cityLabel ? cityLabel : 'Нет такого города'}</span></div>
                </div>
            </div>
        </>
    )
}