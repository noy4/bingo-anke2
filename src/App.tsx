import { Box, Button, Card, Container, Stack, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { BingoModal } from './BingoModal'
import { Field } from './Fields'
import { Galapon } from './Galapon'
import { questionsA, titleA } from './questionsA'

function App() {
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
