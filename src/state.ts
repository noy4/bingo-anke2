import { useState } from 'react'
import { createContainer } from 'unstated-next'
import { makeBingoCard } from '@/lib/bingoCard'
import { Ranker } from '@/types'
import rankersJson from '@/assets/rankers.json'

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  return { isOpen, setIsOpen, onOpen, onClose }
}

export const ModalState = createContainer(() => useDisclosure())
export const DrawerState = createContainer(() => useDisclosure())
export const DialogState = createContainer(() => useDisclosure())

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
    rankersJson.sort((a, b) => b.score - a.score)
    rankersJson.sort((a, b) => b.bingoCount - a.bingoCount)
    const me: Ranker = {
      me: true,
      displayName: 'あなた',
      from: '',
      bingoCount: 0,
      score: 0,
    }
    return [...rankersJson, me]
  })
  return { rankers, setRankers }
})

export const RankState = createContainer(() => {
  const [rank, setRank] = useState({ prev: 0, current: 0 })
  return { rank, setRank }
})
