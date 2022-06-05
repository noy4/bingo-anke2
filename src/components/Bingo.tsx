import { Box, Avatar, Paper, Grid, SxProps } from '@mui/material'
import { blue } from '@mui/material/colors'
import { BingoCardState } from '@/state'

const Square = ({ i }: { i: number }) => {
  const { bingoCard } = BingoCardState.useContainer()
  const { isValid, value } = bingoCard[i]
  const squareStyle: SxProps = isValid
    ? { bgcolor: blue[200], color: 'white' }
    : { bgcolor: 'white', color: blue[200] }

  return (
    <Box p={0.2}>
      <Box bgcolor='white' borderRadius='10px'>
        <Avatar sx={{ fontWeight: 'bold', ...squareStyle }}>{value}</Avatar>
      </Box>
    </Box>
  )
}

export function Bingo({ sx }: { sx?: SxProps }) {
  return (
    <Paper
      elevation={3}
      sx={{ display: 'flex', width: 232, bgcolor: blue[200], p: 1, ...sx }}
    >
      {[...Array(5)].map((_, i) => (
        <Box key={i}>
          <Square i={i * 5 + 0} />
          <Square i={i * 5 + 1} />
          <Square i={i * 5 + 2} />
          <Square i={i * 5 + 3} />
          <Square i={i * 5 + 4} />
        </Box>
      ))}
    </Paper>
  )
}
