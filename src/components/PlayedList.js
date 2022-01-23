import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import { Card, CardContent, Typography } from '@material-ui/core'

import * as React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { playerOutcome } from '../utility'
import PlayerStats from './PlayerStats'
import { closeProfile } from '../reducers/profileReducer'
import RPSIcon from './RPSIcon'

const style = {
  width: '100%',
  bgcolor: 'background.paper'
}

const PlayedList = () => {
  const dispatch = useDispatch()
  const playerName = useSelector(state => state.profile)

  const games = useSelector(state =>
    state.playedGames.filter(game => {
      return (
        game.playerA.name === playerName || game.playerB.name === playerName
      )
    })
  )

  const toggleDrawer = () => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    dispatch(closeProfile())
  }

  const list = anchor => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={style} component="nav" aria-label="mailbox folders">
        {games.map(game => {
          return <SimpleGame game={game} key={game.gameId} />
        })}
      </List>
    </Box>
  )

  const SimpleGame = ({ game }) => {
    const player =
      game.playerA.name === playerName ? game.playerA : game.playerB
    const otherPlayer =
      game.playerB.name === playerName ? game.playerA : game.playerB
    return (
      <div>
        <ListItem key={game.t}>
          <Typography variant="h5">
            {playerOutcome({ game, player })}
          </Typography>
          <Box sx={{ mr: 2 }} />
          <RPSIcon player={player} />
          <Box sx={{ mr: 2 }} />
          <Typography variant="h5">{`VS`}</Typography>
          <Box sx={{ mr: 2 }} />
          <RPSIcon player={otherPlayer} />
          <Box sx={{ mr: 2 }} />
          <Typography variant="h5">{otherPlayer.name}</Typography>
        </ListItem>
        <Divider />
      </div>
    )
  }

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={'right'} open={!!playerName} onClose={toggleDrawer()}>
          <div>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h2">{playerName}</Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent>
                <PlayerStats player={{ name: playerName }} />
              </CardContent>
            </Card>
            {list()}
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  )
}

export default PlayedList
