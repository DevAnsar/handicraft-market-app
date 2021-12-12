import React ,{useContext} from "react";
import { THEME_TYPE } from "../../constants";
import { ThemeContext,ThemeSetContext } from "../../providers/ThemeProvider";
const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set themeMode based on context

  const themeMode = useContext(ThemeContext);
  const themeModeState = useContext(ThemeSetContext);

  const handleThemeChange = (e) => {
    // light & dark & wooden
    themeModeState(themeMode===THEME_TYPE.WOODEN?"dark":"wooden");
  };

  return (
      <div className="switch">
        <label className='text-color'>
          {/* Off */}
          <input type="checkbox" checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange} />
          <span className="lever"></span>
          {/* On */}
        </label>
      </div>
  );
};

export default ThemeSwitcher;
