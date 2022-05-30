import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material'
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

function NameField() {
  return (
    <Stack direction='row' spacing={2} sx={{ my: 2 }}>
      <TextField placeholder='姓' variant='standard' helperText='*必須' />
      <TextField placeholder='名' variant='standard' />
    </Stack>
  )
}

function DisplayNameField() {
  return (
    <TextField
      placeholder='未入力で姓になります'
      variant='standard'
      margin='normal'
      fullWidth
      helperText='*Web上で公開されます。パスワードなどの個人情報を書かないでください。'
    />
  )
}

function FromField() {
  return (
    <TextField
      placeholder='例）九州大学'
      variant='standard'
      margin='normal'
      fullWidth
      helperText='*Web上で公開されます。パスワードなどの個人情報を書かないでください。'
    />
  )
}

function SexField() {
  return (
    <RadioGroup sx={{ my: 1, ml: 1 }}>
      <FormControlLabel value='male' control={<Radio />} label='男性' />
      <FormControlLabel value='female' control={<Radio />} label='女性' />
      <FormControlLabel value='other' control={<Radio />} label='その他' />
    </RadioGroup>
  )
}

function FivePointField({ q }: { q: Question }) {
  return (
    <Box sx={{ my: 1 }}>
      <RadioGroup row sx={{ my: 1, justifyContent: 'center' }}>
        {[...Array(5)].map((_, i) => (
          <FormControlLabel
            key={i}
            labelPlacement='top'
            value={i + 1}
            label={i + 1}
            control={<Radio />}
            sx={{ m: 0 }}
          />
        ))}
      </RadioGroup>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='caption'>{q.negative}</Typography>
        <Typography variant='caption'>{q.positive}</Typography>
      </Stack>
    </Box>
  )
}

function NumberField({ q }: { q: Question }) {
  return (
    <TextField
      type='number'
      placeholder='0'
      variant='standard'
      margin='normal'
      InputProps={{
        endAdornment: <InputAdornment position='end'>{q.unit}</InputAdornment>,
      }}
    />
  )
}

function TextareaField() {
  return (
    <TextField
      placeholder='回答'
      variant='standard'
      margin='normal'
      fullWidth
      multiline
    />
  )
}

export function Field({ q }: { q: Question }) {
  if (q.type === NAME) return <NameField />
  if (q.type === DISPLAY_NAME) return <DisplayNameField />
  if (q.type === FROM) return <FromField />
  if (q.type === SEX) return <SexField />
  if (q.type === FIVE_POINT) return <FivePointField q={q} />
  if (q.type === NUMBER) return <NumberField q={q} />
  if (q.type === TEXTAREA) return <TextareaField />
  return null
}
