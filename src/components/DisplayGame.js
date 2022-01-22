import { getWinner } from '../utility'
import Player from './Player'

import { Grid, Card, Typography } from '@material-ui/core'
import Avatar from '@mui/material/Avatar'

const DisplayGame = game => {
  const winner = player => getWinner(game) === player

  const playerA = { ...game.playerA, winner: winner(game.playerA) }
  const playerB = { ...game.playerB, winner: winner(game.playerB) }

  return (
    <Grid item key={game.gameId}>
      <Card
        sx={{ minWidth: 400 }}
        style={{ marginTop: 30, padding: 30 }}
        variant="outlined"
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Player player={playerA} />
          <Typography variant="h6" gutterBottom component="div">
            <Avatar>VS</Avatar>
          </Typography>
          <Player player={playerB} />
        </Grid>
      </Card>
    </Grid>
  )
}

export default DisplayGame
