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
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

const DisplayGame = game => {
  return (
    <Grid item key={game.gameId} >
      <Card sx={{ minWidth: 400 }} style={{ marginTop: 30, padding: 30 }}>
        {/* <Stack direction="row"> */}
        <Grid>
          <Player player={game.playerA} />
          <Typography variant="h6" gutterBottom component="div">
            <Avatar>VS</Avatar>
          </Typography>
          <Player player={game.playerB} />
        {/* </Stack> */}
        </Grid>
      </Card>
    </Grid>
  )
}

export default DisplayGame
