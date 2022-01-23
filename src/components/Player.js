import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'
import Stack from '@mui/material/Stack'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Profile from './PlayerStats'
import { setProfile } from '../reducers/profileReducer'
import RPSIcon from './RPSIcon'

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
  return (
    <>
      {OutcomeText(player.outcome)}
      <RPSIcon player={player}/>
    </>
  )
}

const OutcomeText = text => {
  return (
    <Typography variant="h4" gutterBottom component="div">
      {text}
    </Typography>
  )
}

export default Player
