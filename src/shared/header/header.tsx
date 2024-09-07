import s from "./header.module.scss";
import { GlobalSvgSelect } from '../../assets/icons/global/GlobalSvgSelect';
import Select from 'react-select';

type Props = {}

const options = [
  { value: 'city-1', label: 'Пенза' },
  { value: 'city-2', label: 'Москва' },
  { value: 'city-3', label: 'Санкт-Петербург' },
  { value: 'city-4', label: 'Анапа' },
  { value: 'city-5', label: 'Волгоград' },
]

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: 'rgba(71, 147, 255, 0.2)',
    width: '194px',
    height: '37px',
    borger: 'none',
    borderRadius: '10px',
    zIndex: 100,
  }),
};

export const Header = (props: Props) => {
  return (
    <header className={s.header}>
        <div className={s.wrapper}>
          <div className={s.logo}><GlobalSvgSelect id="header-logo"/></div>
          <div className={s.title}>Sky Weather</div>
        </div>
        <div className={s.wrapper}>
          <div className={s.change_theme}>
            <GlobalSvgSelect id="change_theme"/>
          </div>
          <Select 
          defaultValue={options[0]}
          styles={colourStyles} 
          options={options}
          />
        </div>
    </header>
  )
}