import { useState } from 'react'
import { createContainer } from 'unstated-next'
import { makeBingoCard } from './bingoCard'

export const BingoCardState = createContainer(() => {
  const [bingoCard, setBingoCard] = useState(() => makeBingoCard())
  return { bingoCard, setBingoCard }
})

export const ModalState = createContainer(() => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  return { isOpen, setIsOpen, onOpen, onClose }
})
