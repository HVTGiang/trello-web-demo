import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { MouseEvent, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Cloud from '@mui/icons-material/Cloud'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import AddCardIcon from '@mui/icons-material/AddCard'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ArchiveIcon from '@mui/icons-material/Archive'
import AddIcon from '@mui/icons-material/Add'
import CardItem from '../CardItem'
import Tooltip from '@mui/material/Tooltip'

const COLUMN_HEADER_HEIGHT: number = 40
const COLUMN_FOOTER_HEIGHT: number = 40
const COLUMN_FOOTER_SPACING: number = 30

const Column = () => {
  const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        pb: 1,
        display: 'flex',
        gap: 1,
        flexDirection: 'column',
        maxWidth: '270px',
        minWidth: '270px',
        maxHeight: `calc(
          100vh
            - 58px
            - 56px
            - ${COLUMN_FOOTER_SPACING}px
            - 16px
          )`,
        borderRadius: '5px',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'
      }}
    >
      {/* Card Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: '8px 16px 0 16px',
          justifyContent: 'space-between',
          maxHeight: `${COLUMN_HEADER_HEIGHT}px`,
          minHeight: `${COLUMN_HEADER_HEIGHT}px`
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          fontSize={'0.875rem'}
          sx={{ cursor: 'pointer' }}
        >
          Header
        </Typography>
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          disableElevation
          onClick={handleClick}
          sx={{
            p: 0,
            minWidth: 0
          }}
        >
          <Tooltip title={'More actions'}>
            <MoreHorizIcon />
          </Tooltip>
        </Button>
        <Menu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button'
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AddCardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Add card...</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ContentCopyIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Copy this column</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ArchiveIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Archive</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>Web Clipboard</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {/* Card Body */}
      <Box
        sx={{
          maxHeight: `
          calc(100vh
            - ${COLUMN_FOOTER_HEIGHT}px
            - ${COLUMN_HEADER_HEIGHT}px
            - ${COLUMN_FOOTER_SPACING}px
            - 16px
            - 16px
            )`,
          overflowX: 'unset',
          overflowY: 'scroll',
          m: '0 4px',
          p: '0 4px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}
      >
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </Box>

      {/* Card Footer */}
      <Box height={`${COLUMN_FOOTER_HEIGHT}px`}>
        <Button
          startIcon={<AddIcon />}
          fullWidth
          sx={{
            color: 'text.primary',
            justifyContent: 'flex-start',
            '&:hover': {
              bgcolor: '#bdc3c7'
            },
            m: '0 8px 0 8px',
            width: 'calc(100% - 16px)',
            minHeight: `${COLUMN_FOOTER_HEIGHT}px`,
            maxHeight: `${COLUMN_FOOTER_HEIGHT}px`
          }}
        >
          Add card
        </Button>
      </Box>
    </Box>
  )
}
export default Column
