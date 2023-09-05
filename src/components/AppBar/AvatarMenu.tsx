import { useState, MouseEvent } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import ListItemIcon from '@mui/material/ListItemIcon'

const AvatarMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        id="basic-button-avatar"
        aria-controls={open ? 'basic-menu-avatar' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ padding: 0, minWidth: 0 }}
      >
        <Tooltip title="Account">
          <Avatar
            alt="User"
            src="/img/avatar.jpg"
            sx={{
              height: '30px',
              width: '30px'
            }}
          />
        </Tooltip>
      </Button>
      <Menu
        id="basic-menu-avatar"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-avatar'
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ height: '30px', width: '30px', mr: 1 }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ height: '30px', width: '30px', mr: 1 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}
export default AvatarMenu
