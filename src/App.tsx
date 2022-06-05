import { Bingo } from '@/components/Bingo'
import { BingoModal } from '@/components/BingoModal'
import { Field } from '@/components/Fields'
import { Galapon } from '@/components/Galapon'
import { Ranking } from '@/components/Ranking'
import { questionsA, titleA } from '@/lib/questionsA'
import { DialogState, DrawerState } from '@/state'
import Menu from '@mui/icons-material/Menu'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  Box,
  Card,
  Container,
  Drawer,
  Fab,
  Stack,
  Typography,
} from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { DoneDialog } from './components/DoneDialog'

function App() {
  const drawer = DrawerState.useContainer()
  const dialog = DialogState.useContainer()

  const formMethods = useForm()
  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = formMethods

  const onSubmit = handleSubmit(async (data) => {
    console.log('data:', data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    drawer.onOpen()
    dialog.onOpen()
  })

  return (
    <FormProvider {...formMethods}>
      <Fab
        sx={{ position: 'fixed', bottom: 8, left: 8 }}
        onClick={drawer.onOpen}
        children={<Menu />}
      />
      <BingoModal />
      <Drawer open={drawer.isOpen} onClose={drawer.onClose}>
        <Ranking />
        <Bingo sx={{ m: 2 }} />
      </Drawer>
      <DoneDialog />

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
                <Galapon q={q} />
              </Stack>
            </Card>
          ))}
          <LoadingButton
            type='submit'
            variant='contained'
            color='primary'
            loading={isSubmitting}
            disabled={isSubmitSuccessful}
            sx={{ mt: 2 }}
          >
            送信
          </LoadingButton>
        </form>

        <Box mt={32} />
      </Container>
    </FormProvider>
  )
}

export default App
