import React from 'react'
import 'src/styling/global.css'

import {render} from 'react-dom'
import configureStore from 'src/store/configureStore'

import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from 'src/components/App/App'

render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
)
