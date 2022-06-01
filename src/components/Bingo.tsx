import { Box, Avatar, Paper, Grid, SxProps } from '@mui/material'
import { blue } from '@mui/material/colors'
import { BingoCardState } from '@/state'

export function Bingo({ sx }: { sx?: SxProps }) {
  const { bingoCard } = BingoCardState.useContainer()

  const renderSquare = (i: number) => {
    const squareStyle: SxProps = bingoCard[i].isValid
      ? { bgcolor: blue[200], color: 'white' }
      : { bgcolor: 'white', color: blue[200] }

    return (
      <Box p={0.2}>
        <Box bgcolor='white' borderRadius='10px'>
          <Avatar sx={{ fontWeight: 'bold', ...squareStyle }}>
            {bingoCard[i].value}
          </Avatar>
        </Box>
      </Box>
    )
  }

  return (
    <Paper
      elevation={3}
      sx={{ display: 'inline-flex', bgcolor: blue[200], p: 1, ...sx }}
    >
      {[...Array(5)].map((_, i) => (
        <Box key={i}>
          {renderSquare(i * 5 + 0)}
          {renderSquare(i * 5 + 1)}
          {renderSquare(i * 5 + 2)}
          {renderSquare(i * 5 + 3)}
          {renderSquare(i * 5 + 4)}
        </Box>
      ))}
    </Paper>
  )
}
