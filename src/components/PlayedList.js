import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import * as React from 'react'
import ContentCutIcon from '@mui/icons-material/ContentCut'
import LandscapeIcon from '@mui/icons-material/Landscape'
import FeedIcon from '@mui/icons-material/Feed'
import { Card, CardActions, CardContent, Typography } from '@material-ui/core'

import LiveList from './LiveList'
import { useDispatch, useSelector } from 'react-redux'
import DisplayGame from './DisplayGame'
import { playerOutcome } from '../utility'
import PlayerStats from './PlayerStats'
import { closeProfile } from '../reducers/profileReducer'

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
          return <SimpleGame game={game} />
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
      <>
        <ListItem key={game.gameId}>
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
      </>
    )
  }

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={'right'}
          open={!!playerName}
          onClose={toggleDrawer()}
        >
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

const RPSIcon = ({ player }) => {
  switch (player.played) {
    case 'ROCK':
      return (
        <>
          <LandscapeIcon fontSize="large" />
        </>
      )
    case 'PAPER':
      return (
        <>
          <FeedIcon fontSize="large" />
        </>
      )
    case 'SCISSORS':
      return (
        <>
          <ContentCutIcon fontSize="large" />
        </>
      )
    default:
      return <></>
  }
}

export default PlayedList
