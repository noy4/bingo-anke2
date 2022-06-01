import { useState } from 'react'
import { createContainer } from 'unstated-next'
import { makeBingoCard } from './bingoCard'
import { Ranker } from './types'

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  return { isOpen, setIsOpen, onOpen, onClose }
}

export const ModalState = createContainer(() => useDisclosure())
export const DrawerState = createContainer(() => useDisclosure())

export const BingoCardState = createContainer(() => {
  const [bingoCard, setBingoCard] = useState(() => makeBingoCard())
  return { bingoCard, setBingoCard }
})

export const BallsState = createContainer(() => {
  const [balls, setBalls] = useState(() => [...Array(75)].map((_, i) => i + 1))
  return { balls, setBalls }
})

export const ScoreState = createContainer(() => {
  const [score, setScore] = useState(0)
  return { score, setScore }
})

export const BingoCountState = createContainer(() => {
  const [bingoCount, setBingoCount] = useState(0)
  return { bingoCount, setBingoCount }
})

export const SlotCountState = createContainer(() => {
  const [slotCount, setSlotCount] = useState(4)
  return { slotCount, setSlotCount }
})

export const SlotValuesState = createContainer(() => {
  const [slotValues, setSlotValues] = useState<{ [key: number]: number }>({})
  return { slotValues, setSlotValues }
})

export const RankersState = createContainer(() => {
  const [rankers, setRankers] = useState<Ranker[]>(() => {
    const base: Ranker[] = [...Array(15)].map((_, i) => ({
      rank: i + 1,
      name: '田中aaaaaaaaaaa',
      from: '九州大学',
      bingoCount: i + 1,
      score: (i + 1) * 100,
    }))
    const me: Ranker = {
      me: true,
      rank: base.length + 1,
      name: 'あなた',
      from: '',
      bingoCount: 0,
      score: 0,
    }
    return [...base, me]
  })
  return { rankers, setRankers }
})
