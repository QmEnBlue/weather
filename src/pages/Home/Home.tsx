import React from 'react';

import s from "./Home.module.scss";
import { ThisDay } from './Components/thisDay/thisDay';
import { ThisDayInfo } from './Components/thisDayInfo/thisDayInfo';

type Props = {}

export const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <ThisDay/>
      <ThisDayInfo/>
    </div>
  )
}