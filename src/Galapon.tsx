import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import { Button } from '@mui/material'
import { useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { checkBingo } from './bingoCard'
import {
  DISPLAY_NAME,
  FIVE_POINT,
  FROM,
  NAME,
  NUMBER,
  Question,
  SEX,
  TEXTAREA,
} from './questionsA'
import {
  BallsState,
  BingoCardState,
  BingoCountState,
  ModalState,
  ScoreState,
  SlotCountState,
  SlotValuesState,
} from './state'

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function Galapon({ q }: { q: Question }) {
  const { onOpen } = ModalState.useContainer()
  const { bingoCard, setBingoCard } = BingoCardState.useContainer()
  const { balls, setBalls } = BallsState.useContainer()
  const { score, setScore } = ScoreState.useContainer()
  const { bingoCount, setBingoCount } = BingoCountState.useContainer()
  const { setSlotValues } = SlotValuesState.useContainer()
  const { setSlotCount } = SlotCountState.useContainer()
  const [done, setDone] = useState(false)
  const { watch } = useFormContext()
  const formValues = watch()

  const galable = useMemo(() => {
    if (q.type === NAME)
      return formValues['familyName']?.trim() && formValues['firstName']?.trim()
    if (q.type === DISPLAY_NAME)
      return (
        formValues['familyName']?.trim() || formValues['displayName']?.trim()
      )
    if (q.type === FROM) return formValues['from']?.trim()
    if (q.type === SEX) return formValues['sex']
    if (q.type === FIVE_POINT) return formValues[q.id]
    if (q.type === NUMBER) return formValues[q.id]?.trim()
    if (q.type === TEXTAREA) return formValues[q.id]?.trim()
    return false
  }, [formValues])

  function slot(slotIndexes: number[]) {
    const ballIndex = Math.floor(Math.random() * balls.length)
    const slotValuesCopy: { [key: number]: number } = {}
    slotIndexes.forEach((slotIndex) => {
      slotValuesCopy[slotIndex] = balls[ballIndex]
    })
    setSlotValues((prev) => ({ ...prev, ...slotValuesCopy }))
  }

  async function onGalapon() {
    onOpen()
    setDone(true)
    setSlotCount(q.slotCount)

    const slotIndexes = [...Array(q.slotCount)].map((_, i) => i)
    const ballsCopy = [...balls]
    const drawnBalls: number[] = []

    // スロットを回す
    const interval = setInterval(() => slot(slotIndexes), 50)

    // あたりを順番に確定
    for (let i = 0; i < q.slotCount; i++) {
      await sleep(200)
      const ballIndex = Math.floor(Math.random() * ballsCopy.length)
      const [ball] = ballsCopy.splice(ballIndex, 1)
      slotIndexes.splice(0, 1)
      drawnBalls.push(ball)
      setSlotValues((prev) => ({ ...prev, [i]: ball }))
    }

    clearInterval(interval)
    await sleep(500)
    let scoreCopy = score
    const bingoCardCopy = [...bingoCard]

    // あたりを順番に反映
    for (const ball of drawnBalls) {
      const squareIndex = bingoCard.findIndex((square) => square.value === ball)
      if (squareIndex !== -1) {
        await sleep(200)
        bingoCardCopy[squareIndex] = {
          ...bingoCardCopy[squareIndex],
          isValid: true,
        }
        setBingoCard(bingoCardCopy)
        scoreCopy += ball
      }
    }

    const newBingoCount = checkBingo(bingoCardCopy)

    // if(newBingoCount!==bingoCount)
    setBingoCount(newBingoCount)
    setScore(scoreCopy)
    setBalls(ballsCopy)
  }

  return (
    <Button
      variant='contained'
      color='secondary'
      disableElevation
      disabled={!galable || done}
      startIcon={done ? <CheckCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
      onClick={onGalapon}
    >
      {done ? '済' : 'ガラポン'}
    </Button>
  )
}
