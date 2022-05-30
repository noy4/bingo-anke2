import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import {
  Box,
  Button,
  Card,
  Container,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { pink } from '@mui/material/colors'
import { questionsA, titleA } from './questionsA'

const theme = createTheme({
  palette: {
    primary: { main: '#F40256' },
    background: { default: pink[100] },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth='xs'>
        <Card sx={{ p: 4, mt: 2 }}>
          <Typography variant='h5' fontWeight='bold'>
            {titleA}（全{questionsA.length}問）
          </Typography>
        </Card>

        {questionsA.map((q, index) => (
          <Card key={index} sx={{ mt: 2, p: 2 }}>
            <Typography fontWeight='bold'>
              {q.id}. {q.title}
            </Typography>
            <Stack direction='row' justifyContent='flex-end'>
              <Button
                variant='contained'
                color='primary'
                disableElevation
                startIcon={<PlayCircleOutlinedIcon />}
              >
                {'ガラポン'}
              </Button>
            </Stack>
          </Card>
        ))}

        <Button variant='contained' color='secondary' sx={{ mt: 2 }}>
          送信
        </Button>

        <Box mt={32} />
      </Container>
    </ThemeProvider>
  )
}

export default App
