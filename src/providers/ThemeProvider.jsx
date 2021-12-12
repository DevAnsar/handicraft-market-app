import React ,{createContext,useState,useEffect} from "react";
import {THEME_TYPE} from './../constants/index';
export const ThemeContext=createContext();
export const ThemeSetContext=createContext();

let defaul=THEME_TYPE.WOODEN;
const ThemeProvider = ({ children }) => {
  const [theme,setTheme]=useState(defaul);
  useEffect(()=>{
    setTheme(THEME_TYPE.WOODEN)
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