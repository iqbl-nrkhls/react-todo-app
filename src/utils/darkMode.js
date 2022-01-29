import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  }

  const setLight = () => {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light';
  }

  const setDark = () => {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark';
  }

  const setMode = (mode) => {
    localStorage.theme = mode;
    setTheme(mode);
    if (mode === 'dark'){
      setDark();
    } else {
      setLight();
    }
  }

  useEffect(() => {
    localStorage.theme ? setMode(localStorage.theme) : setMode('dark');
  }, []);

  return [theme, toggleTheme];
}