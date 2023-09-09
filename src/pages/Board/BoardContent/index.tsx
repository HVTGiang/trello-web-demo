import Box from '@mui/material/Box'

const BoardContent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        flex: 1,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#047BBB',
        borderTop: '0.5px solid',
        borderColor: '#ffffff35'
      }}
    >
      Board Content
    </Box>
  )
}
export default BoardContent
