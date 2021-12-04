import React ,{createContext,useState,useEffect} from "react";
import {THEME_TYPE} from './../constants/index';
export const ThemeContext=createContext();
export const ThemeSetContext=createContext();

const ThemeProvider = ({ children }) => {
  const [theme,setTheme]=useState(THEME_TYPE.LIGHT);
  useEffect(()=>{
    setTheme(THEME_TYPE.LIGHT)
  },[]);
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSetContext.Provider value={setTheme}>
        {children}
        </ThemeSetContext.Provider>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;