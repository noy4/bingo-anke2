import { DialogState } from '@/state'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'

export function DoneDialog() {
  const { isOpen, onClose } = DialogState.useContainer()

  return (
    <Dialog open={isOpen}>
      <DialogTitle>回答を送信しました。</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ご協力ありがとうございました。※デモ版のためデータはサーバーに保存されません。
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>閉じる</Button>
      </DialogActions>
    </Dialog>
  )
}
