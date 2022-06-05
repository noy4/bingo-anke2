import { createTheme, CssBaseline, Grow, ThemeProvider } from '@mui/material'
import { pink } from '@mui/material/colors'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import {
  BallsState,
  BingoCardState,
  BingoCountState,
  DialogState,
  DrawerState,
  ModalState,
  RankersState,
  RankState,
  ScoreState,
  SlotCountState,
  SlotValuesState,
} from '@/state'
import { SnackbarProvider } from 'notistack'

const theme = createTheme({
  palette: {
    secondary: { main: '#F40256' },
    background: { default: pink[100] },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        TransitionComponent={Grow}
      >
        <ModalState.Provider>
          <DrawerState.Provider>
            <DialogState.Provider>
              <BingoCardState.Provider>
                <BallsState.Provider>
                  <ScoreState.Provider>
                    <BingoCountState.Provider>
                      <SlotCountState.Provider>
                        <SlotValuesState.Provider>
                          <RankersState.Provider>
                            <RankState.Provider>
                              <CssBaseline />
                              <App />
                            </RankState.Provider>
                          </RankersState.Provider>
                        </SlotValuesState.Provider>
                      </SlotCountState.Provider>
                    </BingoCountState.Provider>
                  </ScoreState.Provider>
                </BallsState.Provider>
              </BingoCardState.Provider>
            </DialogState.Provider>
          </DrawerState.Provider>
        </ModalState.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
)
