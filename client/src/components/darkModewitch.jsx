import React from 'react'
import useDarkMode from '../hooks/useDarkMode';

function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useDarkMode(false)
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
  )
}

export default DarkModeSwitch
