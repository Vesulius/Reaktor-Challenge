import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'
import Stack from '@mui/material/Stack'
import ContentCutIcon from '@mui/icons-material/ContentCut'
import LandscapeIcon from '@mui/icons-material/Landscape'
import FeedIcon from '@mui/icons-material/Feed'
import CircularProgress from '@mui/material/CircularProgress'

import { useState } from 'react'

import Profile from './Profile'

const Player = ({ player }) => {
  const [profile, setProfile] = useState(false)

  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="caption">Player:</Typography>
        <Typography variant="h5" component="h2">
          {player.name}
        </Typography>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <Outcome player={player} />
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          onClick={() => setProfile(!profile)}
        >
          {profile ? 'close profile' : 'show profile'}
        </Button>
      </CardActions>
      {profile ? <Profile player={player} /> : null}
    </Card>
  )
}

const Outcome = ({ player }) => {
  const text = player.winner ? outcomeText('WIN') : outcomeText('LOSS')
  switch (player.played) {
    case 'ROCK':
      return (
        <>
          {text}
          <LandscapeIcon fontSize="large" />
        </>
      )
    case 'PAPER':
      return (
        <>
          {text}
          <FeedIcon fontSize="large" />
        </>
      )
    case 'SCISSORS':
      return (
        <>
          {text}
          <ContentCutIcon fontSize="large" />
        </>
      )
    default:
      return (
        <>
          {outcomeText('PLAYING')}
          <CircularProgress color="inherit" />
        </>
      )
  }
}

const outcomeText = text => {
  return (
    <Typography variant="h4" gutterBottom component="div">
      {text}
    </Typography>
  )
}

export default Player
