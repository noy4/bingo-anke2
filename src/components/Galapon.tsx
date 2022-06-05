import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import { Button } from '@mui/material'
import { useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { checkBingo } from '@/lib/bingoCard'
import {
  DISPLAY_NAME,
  FIVE_POINT,
  FROM,
  NAME,
  NUMBER,
  Question,
  SEX,
  TEXTAREA,
} from '@/lib/questionsA'
import {
  BallsState,
  BingoCardState,
  BingoCountState,
  ModalState,
  ScoreState,
  SlotCountState,
  SlotValuesState,
  RankersState,
  RankState,
} from '@/state'
import { Ranker } from '@/types'

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function Galapon({ q }: { q: Question }) {
  const { onOpen } = ModalState.useContainer()
  const { bingoCard, setBingoCard } = BingoCardState.useContainer()
  const { balls, setBalls } = BallsState.useContainer()
  const { score, setScore } = ScoreState.useContainer()
  const { bingoCount, setBingoCount } = BingoCountState.useContainer()
  const { setSlotCount } = SlotCountState.useContainer()
  const { setSlotValues } = SlotValuesState.useContainer()
  const { rankers, setRankers } = RankersState.useContainer()
  const { setRank } = RankState.useContainer()
  const [done, setDone] = useState(false)
  const { watch, getValues } = useFormContext()
  const formValues = watch()

  const galable = useMemo(() => {
    if (q.type === NAME)
      return formValues['lastName']?.trim() && formValues['firstName']?.trim()
    if (q.type === DISPLAY_NAME)
      return formValues['lastName']?.trim() || formValues['displayName']?.trim()
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

  function handleRank({
    newBingoCount,
    newScore,
  }: {
    newBingoCount: number
    newScore: number
  }) {
    const rankersCopy = [...rankers]
    const prevIndex = rankersCopy.findIndex((ranker) => ranker.me)
    const prevRanker = rankersCopy[prevIndex]
    const newRanker: Ranker = {
      ...prevRanker,
      displayName:
        getValues('displayName') || getValues('lastName') || 'あなた',
      from: getValues('from'),
      bingoCount: newBingoCount,
      score: newScore,
    }
    rankersCopy[prevIndex] = newRanker
    rankersCopy.sort((a, b) => b.score - a.score)
    rankersCopy.sort((a, b) => b.bingoCount - a.bingoCount)
    setRankers(rankersCopy)
    const newIndex = rankersCopy.findIndex((ranker) => ranker.me)
    setRank({ prev: prevIndex + 1, current: newIndex + 1 })
  }

  async function onGalapon() {
    onOpen()
    setDone(true)
    setSlotCount(q.slotCount)

    const slotIndexes = [...Array(q.slotCount)].map((_, i) => i)
    let ballsCopy = [...balls]
    let drawnBalls: number[] = []

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
    let bingoCardCopy = [...bingoCard]

    // あたりを順番に反映
    for (const ball of drawnBalls) {
      const squareIndex = bingoCard.findIndex((square) => square.value === ball)
      if (squareIndex !== -1) {
        await sleep(200)
        bingoCardCopy[squareIndex] = {
          ...bingoCardCopy[squareIndex],
          isValid: true,
        }
        setBingoCard([...bingoCardCopy])
        scoreCopy += ball
      }
    }

    const newBingoCount = checkBingo(bingoCardCopy)

    // if(newBingoCount!==bingoCount)
    setBingoCount(newBingoCount)
    setScore(scoreCopy)
    setBalls(ballsCopy)
    handleRank({ newBingoCount, newScore: scoreCopy })
  }

  return (
    <Button
      variant='contained'
      color='secondary'
      disableElevation
      // disabled={!galable || done}
      startIcon={done ? <CheckCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
      onClick={onGalapon}
    >
      {done ? '済' : 'ガラポン'}
    </Button>
  )
}
