import { THEME_TYPE } from "../constants";

const Theme = {
  [THEME_TYPE.LIGHT]: {
    body_bg: "#fefefe",
    text_color: "rgba(0, 0, 0, 0.87)",
    text_color_less: "#fff",
    footer_bg:'#eee',
    footer:'0 -5 50  #FFB68C',
    box_border: "rgba(0, 0, 0, 0.12)",
    box_bg_color:'#fff',
    link_color:'#835035',
    link_color_hover:'#531902',
    sidenav_bg:"#fff",
    top_box_bg_color : "#fff",
    top_box_color : "#1f1f1f",
    top_box_color_less:"#6d6d6d",
    btn_1_bg:"rgba(117,26,26,0.8)",
    btn_1_hover_bg:"rgba(117,26,26,0.8)"
  },
  [THEME_TYPE.DARK]: {
    body_bg: "#303030",
    text_color: "#fff",
    text_color_less: "#fff",
    footer_bg:'#4f4e4e7d',
    footer:'0 -5 50  #FFB68C',
    box_border: "rgba(255, 255, 255, 0.12)",
    box_bg_color:'#4f4e4e7d',
    link_color:"#c7c4c3 ",
    link_color_hover:'#fff',
    sidenav_bg:"#4f4e4e7d",
    top_box_bg_color : "#fff",
    top_box_color : "#1f1f1f",
    top_box_color_less:"#6d6d6d",
    btn_1_bg:"rgba(117,26,26,0.8)",
    btn_1_hover_bg:"rgba(117,26,26,0.8)"
  },
  
  [THEME_TYPE.WOODEN]: {
    body_bg: "#835035",
    text_color: "#fff",
    text_color_less: "#e7e5e5 ",
    footer_bg:'#A86846',
    footer:`-webkit-box-shadow: 0px -5px 19px 0px rgba(255,182,140,0.86);
             box-shadow: 0px -5px 19px 0px rgba(255,182,140,0.86);
             border-top: 1px solid #8b5f48
             `,
    box_bg_color:'#ffffff26',
    box_border: "rgba(255, 255, 255, 0.12)",
    link_color:'#fbcebd ',
    link_color_hover:'#f7f0ee',
    sidenav_bg:"#fefefe",
    top_box_bg_color : "#fff",
    top_box_color : "#1f1f1f",
    top_box_color_less:"#6d6d6d",
    btn_1_bg:"rgba(117,26,26,0.5)",
    btn_1_hover_bg:"rgba(117,26,26,0.8)"
  }
};

// text-color
// box

const Styles = (theme) =>`

body {background-color: ${Theme[theme].body_bg} !important;}
a.text-color {color: ${Theme[theme].link_color} !important;}
a:hover.text-color {color: ${Theme[theme].link_color_hover} !important;}
.text-color {color: ${Theme[theme].text_color} !important;}
.text-color-less {color: ${Theme[theme].text_color_less} !important;}
.box {border: 1px solid ${Theme[theme].box_border} !important;background-color:${Theme[theme].box_bg_color} !important}
.top-box {border: 1px solid ${Theme[theme].box_border} !important;background-color:${Theme[theme].top_box_bg_color} !important}
.top-box-text-color {color:${Theme[theme].top_box_color} !important}
.top-box-text-color-less {color:${Theme[theme].top_box_color_less} !important}
.footer {background-color: ${Theme[theme].footer_bg} !important; ${Theme[theme].footer} }
.sidenav-content {background-color: ${Theme[theme].sidenav_bg} !important;}
.btn-1{background-color: ${Theme[theme].btn_1_bg} !important;}
.btn-1:hover{background-color: ${Theme[theme].btn_1_hover_bg} !important;}
`;

export default Styles;
