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
import { FormProvider, useForm } from 'react-hook-form'
import { Field } from './Fields'
import { questionsA, titleA } from './questionsA'

const theme = createTheme({
  palette: {
    secondary: { main: '#F40256' },
    background: { default: pink[100] },
  },
})

function App() {
  const formMethods = useForm()
  const { handleSubmit } = formMethods
  const onSubmit = handleSubmit((data) => {
    console.log('data:', data)
  })

  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...formMethods}>
        <CssBaseline />
        <Container maxWidth='xs'>
          <form onSubmit={onSubmit}>
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
                <Field q={q} />
                <Stack direction='row' justifyContent='flex-end'>
                  <Button
                    variant='contained'
                    color='secondary'
                    disableElevation
                    startIcon={<PlayCircleOutlinedIcon />}
                  >
                    {'ガラポン'}
                  </Button>
                </Stack>
              </Card>
            ))}
            <Button
              type='submit'
              variant='contained'
              color='primary'
              sx={{ mt: 2 }}
            >
              送信
            </Button>
          </form>
          <Box mt={32} />
        </Container>
      </FormProvider>
    </ThemeProvider>
  )
}

export default App
