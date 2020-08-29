import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  html, body, #__next {
    height: 100%;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body {
    overflow-x: hidden;    
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
 
  body {
    font-size: 16px;
    font-family: ${theme.font.sansSerif};
    overflow-y: scroll;
    color: ${(p) => p.theme.color.white};
    background-color: ${(p) => p.theme.color.black};
  }

  a:focus, button:focus {
    outline: 1px solid white !important;
  }
 
  .srOnly {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
  }
`;
