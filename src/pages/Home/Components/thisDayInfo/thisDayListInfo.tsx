import { useCustomSelector } from "../../../../hooks/store";
import { selectCurrentWeatherData } from "../../../../store/selectors";
import s from "./thisDayInfo.module.scss";
import { ThisDayItems } from "./thisDayItems";

interface Item {
  icon_id: string,
  name: string,
  value: string,
}

export const ThisDayListInfo = () => {
      const {weather} = useCustomSelector(selectCurrentWeatherData)

      const getWindDirection = (deg: number): string => {
        if (deg < 0 || deg >= 360) {
            return "Некорректный угол";
        }

        const directions: string[] = [
            "северный",     
            "северо-восточный",
            "восточный",      
            "юго-восточный",  
            "южный",        
            "юго-западный",  
            "западный",       
            "северо-западный" 
        ];
    
        const index = Math.floor((deg + 22.5) / 45) % 8;
        return directions[index];
    }

      const getWindStrength = (speed: number): string => {
        if (speed < 0) return "некорректная скорость ветра";
        if (speed <= 1) return "безветрено";
        if (speed <= 5) return "слабый ветер";
        if (speed <= 11) return "умеренный ветер";
        if (speed <= 20) return "сильный ветер";
        if (speed <= 29) return "очень сильный ветер";
        return "ураганный ветер";
      }
      
      const items = [
        {
          icon_id: "temp",
          name: "Температура",
          value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`,
        },
        {
          icon_id: "pressure",
          name: "Давление",
          value: `${weather.main.pressure} мм ртутного столба`,
        },
        {
          icon_id: "precipitation",
          name: "Влажность",
          value: `${weather.main.humidity}% - Абсолютной влажности`,
        },
        {
          icon_id: "wind",
          name: "Ветер",
          value: `${Math.round(weather.wind.speed*10)/10} м/с - ${getWindDirection(weather.wind.deg)} ${getWindStrength(weather.wind.speed)}`,
        },
      ];
    return (
        <div className={s.this__day__info__items}>
            {items.map((el: Item) => {
            return <ThisDayItems key={el.icon_id} item={el}/>
            })}
        </div>
    )
}