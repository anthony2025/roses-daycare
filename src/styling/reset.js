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
      font-size: 16px;
      line-height: 1;
      margin: 0;
      padding: 0;
    }

    a,
    button {
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
      font-family: SignikaLight;
      src: url(${process.env.PUBLIC_URL}/font/signika-light.otf);
    }
    @font-face {
      font-family: SignikaSemi;
      src: url(${process.env.PUBLIC_URL}/font/signika-semi.otf);
    }
`
