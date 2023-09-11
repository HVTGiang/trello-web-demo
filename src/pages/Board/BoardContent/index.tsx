import Box from '@mui/material/Box'
import Column from './Column'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'

const BoardContent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        flex: 1,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#047BBB',
        borderTop: '0.5px solid',
        borderColor: '#ffffff35',
        maxHeight: `calc(
          100vh
            - 58px
            - 56px
          )`
      }}
    >
      <Box
        sx={{
          display: 'flex',
          overflowX: 'scroll',
          overflowY: 'unset',
          m: '8px 0 8px 0',
          p: '0 16px 12px',
          gap: '12px',
          '&::-webkit-scrollbar-track': {
            m: '0 16px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0,0,0,0.2)',
            '&:hover': {
              background: 'rgba(172, 172, 172, 0.666)'
            }
          }
        }}
      >
        <Column />
        <Column />
        <Column />
        <Box maxWidth={'270px'} minWidth={'270px'} height={'fit-content'}>
          <Button
            variant="text"
            sx={{
              color: 'white',
              backgroundColor: '#ffffff3d',
              py: 1.5,
              px: 2.5,
              '&:hover': {
                backgroundColor: '#ffffff55'
              },
              justifyContent: 'flex-start'
            }}
            startIcon={<AddIcon />}
            fullWidth
          >
            Add other column
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default BoardContent
