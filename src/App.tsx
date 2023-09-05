import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar'
import Board from './pages/Board'

function App() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        // backgroundColor: (theme) => theme.palette.text.secondary,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <AppBar />
      <Board />
    </Container>
  )
}

export default App
