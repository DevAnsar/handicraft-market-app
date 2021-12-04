import { THEME_TYPE } from "../constants";

const Theme = {
  [THEME_TYPE.LIGHT]: {
    background: "#fafafa",
    text: "#rgba(0, 0, 0, 0.87)",
    divider: "rgba(0, 0, 0, 0.12)",
    box:'#fff'
  },
  [THEME_TYPE.DARK]: {
    background: "#303030",
    text: "#fff",
    divider: "rgba(255, 255, 255, 0.12)",
    box:'#4f4e4e7d'
  },
};

const Styles = (theme) => `
body {background-color: ${Theme[theme].background};}
.text-color {color: ${Theme[theme].text};}
.box {border: 1px solid ${Theme[theme].divider};background-color:${Theme[theme].box}}
`;

export default Styles;
