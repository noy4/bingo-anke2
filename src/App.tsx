import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  Button,
  Card,
  Container,
  Drawer,
  Fab,
  Stack,
  Typography,
} from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { Bingo } from './Bingo'
import { BingoModal } from './BingoModal'
import { Field } from './Fields'
import { Galapon } from './Galapon'
import { questionsA, titleA } from './questionsA'
import { Ranking } from './Ranking'
import { DrawerState } from './state'

function App() {
  const { isOpen, onOpen, onClose } = DrawerState.useContainer()
  const formMethods = useForm()
  const { handleSubmit } = formMethods
  const onSubmit = handleSubmit((data) => {
    console.log('data:', data)
  })

  return (
    <FormProvider {...formMethods}>
      <Fab sx={{ position: 'fixed', bottom: 8, left: 8 }} onClick={onOpen}>
        <MenuIcon />
      </Fab>
      <BingoModal />
      <Drawer open={isOpen} onClose={onClose}>
        <Ranking />
        <Bingo sx={{ m: 2 }} />
      </Drawer>

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
