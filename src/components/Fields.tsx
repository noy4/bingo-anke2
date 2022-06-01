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
import { useFormContext } from 'react-hook-form'
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

function NameField() {
  const { register } = useFormContext()
  return (
    <Stack direction='row' spacing={2} sx={{ my: 2 }}>
      <TextField
        placeholder='姓'
        variant='standard'
        helperText='*必須'
        {...register('lastName', { required: true })}
      />
      <TextField
        placeholder='名'
        variant='standard'
        {...register('firstName')}
      />
    </Stack>
  )
}

function DisplayNameField() {
  const { register, watch } = useFormContext()
  const lastName = watch('lastName')
  return (
    <TextField
      placeholder={`未入力で${lastName || '姓'}になります`}
      variant='standard'
      margin='normal'
      fullWidth
      helperText='*Web上で公開されます。パスワードなどの個人情報を書かないでください。'
      {...register('displayName')}
    />
  )
}

function FromField() {
  const { register } = useFormContext()
  return (
    <TextField
      placeholder='例）九州大学'
      variant='standard'
      margin='normal'
      fullWidth
      helperText='*Web上で公開されます。パスワードなどの個人情報を書かないでください。'
      {...register('from')}
    />
  )
}

function SexField() {
  const { register } = useFormContext()
  return (
    <RadioGroup sx={{ my: 1, ml: 1 }}>
      <FormControlLabel
        {...register('sex')}
        value='male'
        label='男性'
        control={<Radio />}
      />
      <FormControlLabel
        {...register('sex')}
        value='female'
        label='女'
        control={<Radio />}
      />
      <FormControlLabel
        {...register('sex')}
        value='other'
        label='その他'
        control={<Radio />}
      />
    </RadioGroup>
  )
}

function FivePointField({ q }: { q: Question }) {
  const { register } = useFormContext()
  return (
    <Box sx={{ my: 1 }}>
      <RadioGroup row sx={{ my: 1, justifyContent: 'center' }}>
        {[...Array(5)].map((_, i) => (
          <FormControlLabel
            key={i}
            {...register(q.id)}
            labelPlacement='top'
            value={String(i + 1)}
            label={String(i + 1)}
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
  const { register } = useFormContext()
  return (
    <TextField
      type='number'
      placeholder='0'
      variant='standard'
      margin='normal'
      InputProps={{
        endAdornment: <InputAdornment position='end'>{q.unit}</InputAdornment>,
      }}
      {...register(q.id)}
    />
  )
}

function TextareaField({ q }: { q: Question }) {
  const { register } = useFormContext()
  return (
    <TextField
      placeholder='回答'
      variant='standard'
      margin='normal'
      fullWidth
      multiline
      {...register(q.id)}
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
  if (q.type === TEXTAREA) return <TextareaField q={q} />
  return null
}
