import {injectGlobal} from 'styled-components'

injectGlobal`
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      background: url("/background.png") no-repeat center/cover fixed;
      font: 16px/1 'Open Sans', 'Helvetica Neue', Helvetica;
      color: white;
    }

    a,
    button {
      transition: .3s;
      text-decoration: none;
      color: inherit;
      font: inherit;
      letter-spacing: inherit;
      border: 0;
      background: none;
      cursor: pointer;
    }

    @font-face {
      font-family: signika;
      src: url(/signika-regular.otf);
    }

    @font-face {
      font-family: signika;
      font-weight: bold;
      src: url(/signika-bold.otf);
    }
`
