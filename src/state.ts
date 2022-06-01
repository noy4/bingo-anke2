import { useState } from 'react'
import { createContainer } from 'unstated-next'
import { makeBingoCard } from './bingoCard'

export const BingoCardState = createContainer(() => {
  const [bingoCard, setBingoCard] = useState(() => makeBingoCard())
  return { bingoCard, setBingoCard }
})
