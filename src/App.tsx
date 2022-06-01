import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import {
  Box,
  Button,
  Card,
  Container,
  CssBaseline,
  Stack,
  Typography,
} from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { BingoModal } from './BingoModal'
import { Field } from './Fields'
import { questionsA, titleA } from './questionsA'
import { ModalState } from './state'

function App() {
  const { onOpen } = ModalState.useContainer()
  const formMethods = useForm()
  const { handleSubmit } = formMethods
  const onSubmit = handleSubmit((data) => {
    console.log('data:', data)
  })

  return (
    <FormProvider {...formMethods}>
      <BingoModal />

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
                  onClick={onOpen}
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
  )
}

export default App
