import { Modal, Stack, Box, Avatar, Container } from '@mui/material'
import { Bingo } from './Bingo'

export function BingoModal() {
  return (
    <Modal open>
      <Container
        maxWidth='xs'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 16,
        }}
      >
        <Stack direction='row'>
          {[...Array(4)].map((_, i) => (
            <Avatar
              key={i}
              sx={{
                background: '#999',
                color: 'white',
                fontSize: 48,
                fontWeight: 900,
                width: 64,
                height: 64,
                m: 1,
              }}
            >
              <Box>12</Box>
            </Avatar>
          ))}
        </Stack>
        <Bingo sx={{ mt: 2 }} />
      </Container>
    </Modal>
  )
}
