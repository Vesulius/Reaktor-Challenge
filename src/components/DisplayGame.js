import { setProfileVal } from '../reducers/profileReducer'
import { getWinner } from '../utility'
import Player from './Player'

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

const DisplayGame = (game, dispatch) => {
  const handleClick = name => event => {
    event.preventDefault()
    dispatch(setProfileVal(name))
  }
  return (
    <Grid item key={game.gameId}>
      <Card sx={{ minWidth: 400 }}>
        <Player player={game.playerA} />
        <Typography variant="h6" gutterBottom component="div">
          VS
        </Typography>
        <Player player={game.playerB} />
      </Card>
    </Grid>
  )
}

// const getResult = game => {
//   if (game.type !== 'GAME_RESULT') {
//     return <WaitingResults />
//   }
//   const winner = getWinner(game)
//   if (!winner) {
//     return 'DRAW'
//   }
//   return `Winner – ${winner.name}`
// }



export default DisplayGame
