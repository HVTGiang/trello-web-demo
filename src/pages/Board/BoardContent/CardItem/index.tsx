import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const CardItem = () => {
  return (
    <Card sx={{ maxWidth: 345, overflow: 'unset', cursor: 'pointer' }}>
      <CardMedia
        sx={{ height: 140, overflow: 'hidden', borderRadius: '5px 5px 0 0' }}
        image="https://th.bing.com/th/id/OIP.PBA5vkcc1cYGAkmviSG4TgHaEE?w=336&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        title="green iguana"
      />
      <CardContent
        sx={{
          p: 1
        }}
      >
        <Typography variant="body1" component="div">
          Title
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          p: '0 8px 8px'
        }}
      >
        <Button
          size="small"
          sx={{
            p: 0,
            minWidth: 0
          }}
        >
          Action 1
        </Button>
        <Button
          size="small"
          sx={{
            p: 0
          }}
        >
          Action 2
        </Button>
      </CardActions>
    </Card>
  )
}
export default CardItem
