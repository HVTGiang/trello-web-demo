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

const AppBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 1,
        width: '100%',
        height: '58px',
        overflowX: 'auto'
        // backgroundColor: (theme) => theme.palette.primary.main
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <AppsIcon color="primary" />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          <SvgIcon component={TrelloIcon} inheritViewBox color="primary" />
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '20px',
              color: 'primary.main'
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
            display: { xs: 'none', md: 'flex' }
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
          type="search"
          size="small"
          sx={{ minWidth: '120px' }}
        />
        <ModeToggle />
        <Tooltip title="Notify">
          <IconButton sx={{ padding: 0 }}>
            <Badge color="primary" variant="dot" overlap="circular">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Info">
          <IconButton sx={{ padding: 0 }}>
            <HelpOutlineIcon />
          </IconButton>
        </Tooltip>
        <AvatarMenu />
      </Box>
    </Box>
  )
}
export default AppBar
