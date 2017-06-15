import React from 'react'
// import registerServiceWorker from './registerServiceWorker'

import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from 'components/App/App'

import injectGlobalCSS from 'styling/global.js'
import theme from 'styling/theme'
import {ThemeProvider} from 'styled-components'

import configureStore from 'store/configureStore'
import {Provider} from 'react-redux'

injectGlobalCSS()

render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// registerServiceWorker()
