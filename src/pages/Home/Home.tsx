import s from "./Home.module.scss";
import { ThisDayInfo } from './Components/thisDayInfo/thisDayInfo';
import { Days } from "./Components/Days/Days";
import { ThisDay } from "./Components/thisDay/thisDay";
import { useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors";

export const Home = () => {
  const {weather} = useCustomSelector(selectCurrentWeatherData)
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather}/>
        <ThisDayInfo/>
      </div>
      <Days />
    </div>
  )
}