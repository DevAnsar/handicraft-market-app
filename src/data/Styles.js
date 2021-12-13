import { THEME_TYPE } from "../constants";

const Theme = {
  [THEME_TYPE.LIGHT]: {
    body_bg: "#fefefe",
    text_color: "rgba(0, 0, 0, 0.87)",
    box_border: "rgba(0, 0, 0, 0.12)",
    box_bg_color:'#fff',
    footer_bg:'#eee',
    link_color:'#835035',
    link_color_hover:'#531902',
    sidenav_bg:"#fff",
    top_box_bg_color : "#fff",
    top_box_color : "#1f1f1f",
    top_box_color_less:"#6d6d6d"
  },
  [THEME_TYPE.DARK]: {
    body_bg: "#303030",
    text_color: "#fff",
    box_border: "rgba(255, 255, 255, 0.12)",
    box_bg_color:'#4f4e4e7d',
    footer_bg:'#4f4e4e7d',
    link_color:"#c7c4c3 ",
    link_color_hover:'#fff',
    sidenav_bg:"#4f4e4e7d",
    top_box_bg_color : "#fff",
    top_box_color : "#1f1f1f",
    top_box_color_less:"#6d6d6d"
  },
  
  [THEME_TYPE.WOODEN]: {
    body_bg: "#835035",
    text_color: "#fff",
    box_bg_color:'#ffffff26',
    footer_bg:'#4f4e4e7d',
    box_border: "rgba(255, 255, 255, 0.12)",
    link_color:'#e9af98',
    link_color_hover:'#f7f0ee',
    sidenav_bg:"#fefefe",
    top_box_bg_color : "#fff",
    top_box_color : "#1f1f1f",
    top_box_color_less:"#6d6d6d"
  }
};

// text-color
// box

const Styles = (theme) =>`

body {background-color: ${Theme[theme].body_bg} !important;}
a.text-color {color: ${Theme[theme].link_color} !important;}
a:hover.text-color {color: ${Theme[theme].link_color_hover} !important;}
.text-color {color: ${Theme[theme].text_color} !important;}
.box {border: 1px solid ${Theme[theme].box_border} !important;background-color:${Theme[theme].box_bg_color} !important}
.top-box {border: 1px solid ${Theme[theme].box_border} !important;background-color:${Theme[theme].top_box_bg_color} !important}
.top-box-text-color {color:${Theme[theme].top_box_color} !important}
.top-box-text-color-less {color:${Theme[theme].top_box_color_less} !important}
.footer {background-color: ${Theme[theme].footer_bg} !important;color}
.sidenav-content {background-color: ${Theme[theme].sidenav_bg} !important;color}

`;

export default Styles;
