import s from "./header.module.scss";
import '../../styles/variables.scss';
import { GlobalSvgSelect } from '../../assets/icons/global/GlobalSvgSelect';
import Select from 'react-select';
import { useEffect, useState } from "react";
import { useCustomDispatch } from "../../hooks/store";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";


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

export const Header = () => {
  const dispatch = useCustomDispatch()
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentCountry, setCurrentCountry] = useState(() => {
    const savedCountry = localStorage.getItem('currentCountry');
    return savedCountry ? savedCountry : options[0].value;
});

  const toggleTheme = () => { 
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    setIsDarkMode(prevMode => !prevMode);
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
  };

  const getValue = () => {
    return options.find(option => option.value === currentCountry);
  }

  const onChange = (newValue: any) => {
    setCurrentCountry(newValue.value)
  }

  useEffect(() => {
    dispatch(fetchCurrentWeather(`${currentCountry}`))
    localStorage.setItem('currentCountry', currentCountry)
  },[currentCountry])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    localStorage.setItem('currentCountry', currentCountry)

    if (savedTheme) {
        setTheme(savedTheme);
        setIsDarkMode(savedTheme === 'light'); // Устанавливаем isDarkMode на основе загруженной темы
    } else {
        setIsDarkMode(true); 
    }
}, []);

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      paddingLeft: '10px',
      zIndex: 100,
      backgroundColor: isDarkMode ? "rgba(71, 147, 255, 0.2)" : "#4f4f4f",
    }),

    singleValue: (provided: any) => ({
      ...provided,
      color: 'var(--text-color-default)',
    }),
  
    option: (provided: any) => ({
      ...provided,
      backgroundColor: 'none',
      color: 'none'
    }),
  
    menu: (styles: any) => ({
      ...styles,
      zIndex: 200,
      color: 'var(--text-color-default)',
      backgroundColor: isDarkMode ? "rgba(71, 147, 255, 0.2)" : "#4f4f4f",
    }),
    
    placeholder: (provided: any) => ({
      ...provided,
      color: 'var(--text-color-default)',
    }),
  };

  return (
    <header className={s.header}>
        <div className={s.wrapper}>
          <div className={s.logo}><GlobalSvgSelect id="header-logo"/></div>
          <div className={s.title}>Sky Weather</div>
        </div>
        <div className={s.wrapper}>
          <div className={s.change_theme} onClick={() => {
            toggleTheme()
          }}>
            <GlobalSvgSelect id="change_theme"/>
          </div>
          <Select
          defaultValue={getValue()}
          placeholder="Выбрать город"
          styles={colourStyles}
          onChange={onChange}
          options={options}
          />
        </div>
    </header>
  )
}