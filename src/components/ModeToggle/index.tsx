import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import styled from '@emotion/styled'

const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
function ModeToggle() {
  enum Mode {
    'light' = 'light',
    'dark' = 'dark',
    'system' = 'system'
  }
  const { mode, setMode } = useColorScheme()
  const handleChange = (e: SelectChangeEvent) => {
    switch (e.target.value) {
    case Mode.light:
      setMode('light')
      break
    case Mode.dark:
      setMode('dark')
      break
    case Mode.system:
      setMode('system')
      break
    }
  }
  return (
    <FormControl
      sx={{
        minWidth: '120px',
        '& label': {
          color: 'white'
        },
        '& label.Mui-focused': {
          color: 'white'
        },
        '&:hover label': {
          color: 'white'
        },
        '.MuiOutlinedInput-root': {
          borderColor: '#ffffff35',
          '& fieldset': {
            borderColor: '#ffffff35'
          },
          '&:hover fieldset': {
            borderColor: '#ffffff35'
          },
          '&.Mui-focused fieldset': {
            borderColor: '#ffffff35',
            borderWidth: '1px'
          }
        },
        '.MuiSvgIcon-root': {
          color: 'white'
        }
      }}
      size="small"
    >
      <InputLabel
        id="demo-select-small-label"
        sx={{
          color: 'white',
          '.Mui-focused': {
            color: 'white'
          }
        }}
      >
        Mode
      </InputLabel>
      <Select
        sx={{
          fontSize: '0.875rem',
          color: 'white'
        }}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value={'light'}>
          <ItemContent>
            <LightModeIcon fontSize="small" />
            Light
          </ItemContent>
        </MenuItem>
        <MenuItem value={'dark'}>
          <ItemContent>
            <ModeNightIcon fontSize="small" />
            Dark
          </ItemContent>
        </MenuItem>
        <MenuItem value={'system'}>
          <ItemContent>
            <SettingsBrightnessIcon fontSize="small" />
            System
          </ItemContent>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
export default ModeToggle
