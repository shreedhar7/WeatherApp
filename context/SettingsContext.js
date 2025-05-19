
import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [temperatureUnit, setTemperatureUnit] = useState('C');
  
  return (
    <SettingsContext.Provider
      value={{
        temperatureUnit,
        setTemperatureUnit,
        
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
