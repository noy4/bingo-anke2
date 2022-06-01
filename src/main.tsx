import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { pink } from '@mui/material/colors'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BingoCardState, ModalState } from './state'

const theme = createTheme({
  palette: {
    secondary: { main: '#F40256' },
    background: { default: pink[100] },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BingoCardState.Provider>
        <ModalState.Provider>
          <CssBaseline />
          <App />
        </ModalState.Provider>
      </BingoCardState.Provider>
    </ThemeProvider>
  </React.StrictMode>
)
