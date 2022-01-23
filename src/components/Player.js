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
import { useDispatch } from 'react-redux'

import Profile from './PlayerStats'
import { setProfile } from '../reducers/profileReducer'

const Player = ({ player }) => {
  const dispatch = useDispatch()
  const [stats, setStats] = useState(false)
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
          onClick={() => setStats(!stats)}
        >
          {stats ? 'close stats' : 'stats'}
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() => dispatch(setProfile(player.name))}
        >
          profile
        </Button>
      </CardActions>
      {stats && <Profile player={player} />}
    </Card>
  )
}

const Outcome = ({ player }) => {
  switch (player.played) {
    case 'ROCK':
      return (
        <>
          {OutcomeText(player.outcome)}
          <LandscapeIcon fontSize="large" />
        </>
      )
    case 'PAPER':
      return (
        <>
          {OutcomeText(player.outcome)}
          <FeedIcon fontSize="large" />
        </>
      )
    case 'SCISSORS':
      return (
        <>
          {OutcomeText(player.outcome)}
          <ContentCutIcon fontSize="large" />
        </>
      )
    default:
      return (
        <>
          {OutcomeText('PLAYING')}
          <CircularProgress color="inherit" />
        </>
      )
  }
}

const OutcomeText = text => {
  return (
    <Typography variant="h4" gutterBottom component="div">
      {text}
    </Typography>
  )
}

export default Player
