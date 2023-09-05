import Box from '@mui/material/Box'

const BoardContent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        flex: 1,
        backgroundColor: (theme) => theme.palette.primary.light
      }}
    >
      Board Content
    </Box>
  )
}
export default BoardContent
