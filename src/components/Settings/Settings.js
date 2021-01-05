import React from 'react'


{/*Themes*/}
export const themes = {
    dark: {
      background: "#000",
      color: "#fff",
    },
    light: {
      background: "#fff",
      color: "#000",
    },
  };
export const ThemeContext = React.createContext(themes.dark);