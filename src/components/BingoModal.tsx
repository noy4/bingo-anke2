import { Modal, Stack, Box, Avatar, Container } from '@mui/material'
import { Bingo } from '@/components/Bingo'
import { ModalState, SlotCountState, SlotValuesState } from '@/state'

export function BingoModal() {
  const { isOpen, onClose } = ModalState.useContainer()
  const { slotCount } = SlotCountState.useContainer()
  const { slotValues } = SlotValuesState.useContainer()

  return (
    <Modal open={isOpen} onClose={onClose}>
      <>
        <Container
          maxWidth='xs'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 12,
          }}
        >
          <Stack direction='row' flexWrap='wrap' justifyContent='center'>
            {[...Array(slotCount)].map((_, i) => (
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
                <Box>{slotValues[i]}</Box>
              </Avatar>
            ))}
          </Stack>
        </Container>
        <Bingo sx={{ mt: 2, mx: 'auto' }} />
      </>
    </Modal>
  )
}
