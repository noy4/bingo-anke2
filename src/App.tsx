import {
  Card,
  CardActions,
  CardContent,
  Container,
  createTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { pink, red } from '@mui/material/colors'
import { questionsA } from './questionsA'

const theme = createTheme({
  palette: { background: { default: pink[100] } },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='xs'>
        <Paper sx={{ p: 4, mt: 2 }}>
          <Typography variant='h5' fontWeight='bold'>
            アンケートについてのアンケート（全15問）
          </Typography>
        </Paper>

        {questionsA.map((q, index) => (
          <Card key={index} sx={{ mt: 2 }}>
            <CardContent>
              <Typography fontWeight='bold'>
                {q.id}. {q.title}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        ))}
      </Container>
    </ThemeProvider>
  )
}

export default App
