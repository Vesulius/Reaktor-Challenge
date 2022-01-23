import { Grid, Card, Typography } from '@material-ui/core'
import Avatar from '@mui/material/Avatar'

import Player from './Player'
import { playerOutcome } from '../utility'

const DisplayGame = game => {
  const playerA = {
    ...game.playerA,
    outcome: playerOutcome({ game, player: game.playerA })
  }
  const playerB = {
    ...game.playerB,
    outcome: playerOutcome({ game, player: game.playerB })
  }

  return (
    <Grid item key={game.gameId}>
      <Card
        sx={{ minWidth: 300 }}
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
