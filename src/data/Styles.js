import { THEME_TYPE } from "../constants";

const Theme = {
  [THEME_TYPE.LIGHT]: {
    background: "#fafafa",
    text: "#rgba(0, 0, 0, 0.87)",
    divider: "rgba(0, 0, 0, 0.12)",
    box:'#fff',
    footer_bg:'#eee',
    text2:'#a74d2a',
    text2hover:'#531902'
  },
  [THEME_TYPE.DARK]: {
    background: "#303030",
    text: "#fff",
    divider: "rgba(255, 255, 255, 0.12)",
    box:'#4f4e4e7d',
    footer_bg:'#4f4e4e7d',
    text2:'#e9af98',
    text2hover:'#f7f0ee'
  },
};

// text-color
// box

const Styles = (theme) => `
body {background-color: ${Theme[theme].background};}
.text-color {color: ${Theme[theme].text};}
.box {border: 1px solid ${Theme[theme].divider};background-color:${Theme[theme].box}}
.footer {background-color: ${Theme[theme].footer_bg};}

a.text-color {color: ${Theme[theme].text2};}
a:hover.text-color {color: ${Theme[theme].text2hover};}
`;

export default Styles;
