import { createGlobalStyle } from 'styled-components'

import * as V from './variables'

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }
  
  * {
    box-sizing: border-box;
  }

  button {
    background: none;
    border: 0;
    padding: 0;
  }

  img {
    display: block;
  	height: auto;
  	max-width: 100%;
  }

  html {
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: auto;
    font-size: 10px;
  }

  body {
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    background-color: var(--bg);
    color: var(--primaryColor);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    transition: background-color ${V.Transition.default};
    will-change: background-color;
  }

  body.theme-dark {
    --bg: ${V.Color.grayDarker};
    --bgSecondary: ${V.Color.black};
    --borderColor: ${V.Color.gray};
    --highlightColor: ${V.Color.blueLight};
    --primaryColor: rgba(250, 250, 250, .85);
    --secondaryColor: ${V.Color.grayLighter};
  }

  body.theme-light {
    --bg: ${V.Color.white};
    --bgSecondary: ${V.Color.grayWhite};
    --borderColor: ${V.Color.gray};
    --highlightColor: ${V.Color.blue};
    --primaryColor: rgba(0, 0, 0, .85);
    --secondaryColor: ${V.Color.grayDark};
  }

  p a {
    color: var(--highlightColor); 
  }

  ::selection {
    background: var(--highlightColor); 
  }
`
export default GlobalStyles