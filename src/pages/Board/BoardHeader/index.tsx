import Box from '@mui/material/Box'

const BoardHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '56px',
        backgroundColor: (theme) => theme.palette.primary.dark
      }}
    >
      Board Bar
    </Box>
  )
}
export default BoardHeader
