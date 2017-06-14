import React from 'react'

import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from 'src/components/App/App'

import 'src/styling/global.js'
import theme from 'src/styling/theme.js'
import {ThemeProvider} from 'styled-components'

import configureStore from 'src/store/configureStore'
import {Provider} from 'react-redux'


render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
)
