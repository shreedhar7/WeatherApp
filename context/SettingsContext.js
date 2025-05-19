// context/SettingsContext.js
import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [temperatureUnit, setTemperatureUnit] = useState('C');
  const [selectedCategories, setSelectedCategories] = useState([
    'general',
  ]); // default category

  return (
    <SettingsContext.Provider
      value={{
        temperatureUnit,
        setTemperatureUnit,
        selectedCategories,
        setSelectedCategories,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
