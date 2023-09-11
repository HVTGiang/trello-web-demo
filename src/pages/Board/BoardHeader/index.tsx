import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Chip from '@mui/material/Chip'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import FilterListIcon from '@mui/icons-material/FilterList'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import PersonAdd from '@mui/icons-material/PersonAdd'
import { Tooltip } from '@mui/material'

const ChipStyle = {
  color: 'white',
  borderRadius: '4px',
  bgcolor: 'transparent',
  '&:hover': {
    bgcolor: 'primary.50'
  },
  '.MuiSvgIcon-root': {
    color: 'white'
  }
}

const BoardHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '56px',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#045C94',
        borderTop: '0.5px solid',
        borderColor: '#ffffff35',
        paddingX: 1
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Chip
          icon={<DashboardIcon />}
          label="Giang Trello Dashboard"
          sx={ChipStyle}
          clickable
        />
        <Chip
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          sx={ChipStyle}
          clickable
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          sx={ChipStyle}
          clickable
        />
        <Chip
          icon={<AutoAwesomeIcon />}
          label="Automation"
          sx={ChipStyle}
          clickable
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filter"
          sx={ChipStyle}
          clickable
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Button
          variant="outlined"
          startIcon={<PersonAdd />}
          sx={{
            color: 'white',
            border: '1px solid #ffffff35',
            '&:hover': {
              border: '1px solid #ffffff35',
              bgcolor: '#ffffff35'
            }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          total={15}
          sx={{
            gap: '4px',
            '& .MuiAvatar-root': {
              width: '30px',
              height: '30px',
              fontSize: '0.875rem',
              borderWidth: '1px',
              borderColor: 'white',
              color: 'white',
              cursor: 'pointer'
            }
          }}
        >
          <Tooltip title="Nga Le Thanh">
            <Avatar alt="Nga Le Thanh" src="/" />
          </Tooltip>
          <Tooltip title="Nga Le Thanh">
            <Avatar alt="Nga Le Thanh" src="/" />
          </Tooltip>
          <Tooltip title="Nga Le Thanh">
            <Avatar alt="Nga Le Thanh" src="/" />
          </Tooltip>
          <Tooltip title="Nga Le Thanh">
            <Avatar alt="Nga Le Thanh" src="/" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}
export default BoardHeader
