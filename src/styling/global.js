import {injectGlobal} from 'styled-components'

export default () => injectGlobal`
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-image: url(${process.env.PUBLIC_URL}/background.jpg);
      font-size: 16px/1;
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
      font-family: SignikaRegular;
      src: url(${process.env.PUBLIC_URL}/font/signika-regular.otf);
    }

    @font-face {
      font-family: SignikaBold;
      src: url(${process.env.PUBLIC_URL}/font/signika-bold.otf);
    }
    @font-face {
      font-family: SignikaLight;
      src: url(${process.env.PUBLIC_URL}/font/signika-light.otf);
    }
    @font-face {
      font-family: SignikaSemi;
      src: url(${process.env.PUBLIC_URL}/font/signika-semi.otf);
    }
`
