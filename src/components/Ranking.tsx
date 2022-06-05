import { Avatar, Box, List, Paper, Typography } from '@mui/material'
import { blue, pink } from '@mui/material/colors'
import { RankersState } from '@/state'

export function Ranking() {
  const { rankers } = RankersState.useContainer()

  return (
    <>
      <Typography fontWeight='bold' fontSize={20} textAlign='center' mt={1}>
        ランキング
      </Typography>

      <List sx={{ overflow: 'scroll', flex: 1, px: 2 }}>
        {rankers.map((ranker, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 1,
              borderRadius: 100,
              bgcolor: ranker.me ? pink[100] : 'white',
            }}
          >
            <Avatar sx={{ bgcolor: blue[200], color: 'white', m: 1 }}>
              {index + 1}
            </Avatar>

            <Box width={160} mr={2}>
              <Typography noWrap>
                {ranker.displayName}（{ranker.from}）
              </Typography>
              <Box display='flex' justifyContent='space-between' fontSize={14}>
                <Box>{ranker.bingoCount} BINGO</Box>
                <Box>{ranker.score}点</Box>
              </Box>
            </Box>
          </Paper>
        ))}
      </List>
    </>
  )
}
