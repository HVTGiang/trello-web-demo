import { useState } from 'react'
import Box from '@mui/material/Box'
import ModeToggle from '~/components/ModeToggle'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello-icon.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import WorkSpaces from './WorkSpaces'
import Recent from './Recent'
import Starred from './Starred'
import Templates from './Templates'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import AvatarMenu from './AvatarMenu'
import CloseIcon from '@mui/icons-material/Close'

const AppBar = () => {
  const [ searchText, setSearchText ] = useState('')
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 1,
        width: '100%',
        height: '58px',
        overflowX: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#0464A4'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          color: 'white'
        }}
      >
        <AppsIcon />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          <SvgIcon component={TrelloIcon} inheritViewBox />
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '20px'
              // color: 'primary.main'
            }}
          >
            Trello
          </Typography>
        </Box>
        <WorkSpaces />
        <Recent />
        <Starred />
        <Templates />
        <Button
          variant="outlined"
          size="small"
          sx={{
            display: { xs: 'none', md: 'flex' },
            border: 'none',
            bgcolor: '#ffffff35',
            color: 'white',
            '&:hover': {
              bgcolor: '#ffffff7d',
              border: 'none'
            }
          }}
        >
          Create
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <TextField
          id="search-box"
          label="Search..."
          type="text"
          size="small"
          defaultValue={searchText}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            endAdornment: (
              <CloseIcon
                fontSize="small"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  display: searchText ? 'block' : 'none'
                }}
                onClick={() => setSearchText('')}
              />
            )
          }}
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            color: 'white',
            '& input': {
              color: 'white'
            },
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
            }
          }}
        />
        <ModeToggle />
        <Tooltip title="Notify">
          <IconButton sx={{ padding: 0, color: 'white' }}>
            <Badge color="warning" variant="dot" overlap="circular">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Info">
          <IconButton sx={{ padding: 0, color: 'white' }}>
            <HelpOutlineIcon />
          </IconButton>
        </Tooltip>
        <AvatarMenu />
      </Box>
    </Box>
  )
}
export default AppBar
