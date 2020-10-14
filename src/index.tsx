import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import { AppProvider } from './store'
import App from './pages/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <ColorModeProvider>
      <ThemeProvider>
        <CSSReset />
        <AppProvider>
          <App />
        </AppProvider>
      </ThemeProvider>
    </ColorModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
