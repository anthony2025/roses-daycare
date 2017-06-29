import React from 'react'
import registerServiceWorker from 'services/serviceWorker'

import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from 'containers/App'

import injectResetCSS from 'styling/reset.js'
import theme from 'styling/theme'
import {ThemeProvider} from 'styled-components'

import configureStore from 'store/configureStore'
import {Provider} from 'react-redux'

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

injectResetCSS()
registerServiceWorker()
