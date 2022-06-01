import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { pink } from '@mui/material/colors'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  BallsState,
  BingoCardState,
  BingoCountState,
  ModalState,
  ScoreState,
  SlotCountState,
  SlotValuesState,
} from './state'

const theme = createTheme({
  palette: {
    secondary: { main: '#F40256' },
    background: { default: pink[100] },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ModalState.Provider>
        <BingoCardState.Provider>
          <BallsState.Provider>
            <ScoreState.Provider>
              <BingoCountState.Provider>
                <SlotCountState.Provider>
                  <SlotValuesState.Provider>
                    <CssBaseline />
                    <App />
                  </SlotValuesState.Provider>
                </SlotCountState.Provider>
              </BingoCountState.Provider>
            </ScoreState.Provider>
          </BallsState.Provider>
        </BingoCardState.Provider>
      </ModalState.Provider>
    </ThemeProvider>
  </React.StrictMode>
)
