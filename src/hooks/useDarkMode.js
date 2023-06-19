import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('isDarkMode');
    setIsDarkMode(storedMode ? JSON.parse(storedMode) : false);
  }, []);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    // if (isDarkMode) {
    //   document.body.classList.add('dark-mode');
    // } else {
    //   document.body.classList.remove('dark-mode');
    // }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;
