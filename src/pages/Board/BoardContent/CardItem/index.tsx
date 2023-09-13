import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PersonIcon from '@mui/icons-material/Person'
import AttachmentIcon from '@mui/icons-material/Attachment'
import { ICard } from '~/types/card'

const CardItem = ({ card }: { card: ICard }) => {
  const shouldShowAction = !!card.memberIds.length || !!card.attachments.length
  return (
    <Card
      sx={{
        maxWidth: 345,
        overflow: 'unset',
        cursor: 'pointer'
      }}
    >
      {card.cover && (
        <CardMedia
          sx={{ height: 140, overflow: 'hidden', borderRadius: '5px 5px 0 0' }}
          image={card.cover}
        />
      )}
      <CardContent
        sx={{
          p: 1,
          '&:last-child': { p: 1 }
        }}
      >
        <Typography variant="body1" component="div">
          {card.title}
        </Typography>
      </CardContent>
      {shouldShowAction && (
        <CardActions
          sx={{
            p: '0 8px 8px',
            gap: 1.5
          }}
        >
          {!!card.memberIds.length && (
            <Button
              size="small"
              sx={{
                p: 0,
                minWidth: 0,
                alignItems: 'center'
              }}
              startIcon={<PersonIcon />}
            >
              {card.memberIds.length}
            </Button>
          )}
          {!!card.attachments.length && (
            <Button
              size="small"
              sx={{
                p: 0
              }}
              startIcon={<AttachmentIcon />}
            >
              {card.attachments.length}
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  )
}
export default CardItem
