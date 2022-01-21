import {
  Grid,
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
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="caption">Player:</Typography>
        <Typography variant="h5" component="h2">
          {player.name}
        </Typography>
        {player.played 
            ? (<PlayedHand hand={player.played} />) 
            : (<WaitingResults />)}
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={() => setProfile(!profile)}>
          {profile ? 'close profile' : 'show profile'}
        </Button>
      </CardActions>
      {profile ? <Profile /> : null}
    </Card>
  )
}


const PlayedHand = hand => {
  switch (hand.hand) {
    case 'ROCK':
      return <LandscapeIcon fontSize="large" />
    case 'PAPER':
      return <FeedIcon fontSize="large" />
    case 'SCISSORS':
      return <ContentCutIcon fontSize="large" />
    default:
      return <div>playing...</div>
  }
}

const WaitingResults = () => {
  return (
    <div>
      <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <Typography variant="h4" gutterBottom component="div">
          PLAYING
        </Typography>
        <CircularProgress color="inherit" />
      </Stack>
    </div>
  )
}

export default Player