import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'for_dark_them' : 'for_light_them'}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Theme Switcher</h1>
        <button
          onClick={toggleTheme}
          className="bg-gray-800 text-white py-2 px-4 rounded-md"
        >
          Toggle Theme
        </button>
        <div className="mt-4">
          <p className="text-lg">
            Current Theme: {isDarkTheme ? 'Dark' : 'Light'}
          </p>
          <p className="text-lg">
            Primary Color: var(--primary-color);
          </p>
          <p className="text-lg">
            Secondary Color: var(--secondary-color);
          </p>
          <p className="text-lg">
            Background Color: var(--bg-color);
          </p>
          <p className="text-lg">
            Font Color: var(--font-color);
          </p>
          <p className="text-lg">
            Heading Color: var(--heading-color);
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;