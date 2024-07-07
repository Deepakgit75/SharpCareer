import React, { useState } from 'react';

const ToggleMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button onClick={toggleMode} className="bg-gray-300 p-2 rounded">
      {darkMode ? 'Day Mode' : 'Night Mode'}
    </button>
  );
};

export default ToggleMode;
