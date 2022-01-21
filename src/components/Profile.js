import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import ContentCutIcon from '@mui/icons-material/ContentCut'
import LandscapeIcon from '@mui/icons-material/Landscape'
import FeedIcon from '@mui/icons-material/Feed'

import { useSelector } from 'react-redux'

import { getWinner } from '../utility'

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper'
}

const Profile = player => {
  const games = useSelector(state => state.playedGames)
  if (!player) return <div></div>
  const name = player.player.name

  if (!games) {
    return <div>NO PROFILE SELECTED</div>
  }

  const playerGames = games
    .filter(game => {
      return game.playerA.name === name || game.playerB.name === name
    })
    .map(game => {
      return {
        played:
          game.playerA.name === name
            ? game.playerA.played
            : game.playerB.played,
        result: playerOutcome(game, name)
      }
    })

  if (playerGames.length === 0) {
    return <div>NO DATA</div>
  }

  const winrate = (
    playerGames.reduce((total, game) => {
      return game.result === 'WIN' ? total + 1 : total
    }, 0) / playerGames.length
  ).toFixed(2)

  const playRates = playerGames.reduce(
    (total, game) => {
      switch (game.played) {
        case 'ROCK':
          return { ...total, rocks: total.rocks + 1 }
        case 'PAPER':
          return { ...total, papers: total.papers + 1 }
        case 'SCISSORS':
          return { ...total, scissors: total.scissors + 1 }
      }
    },
    {
      rocks: 0,
      papers: 0,
      scissors: 0
    }
  )

  return (
    <div>
      <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem
          secondaryAction={<ListItemText primary={playerGames.length} />}
        >
          <ListItemText primary={"MATCHES"} />
        </ListItem>
        <Divider light />
        <ListItem
          secondaryAction={<ListItemText primary={`${winrate} %`} />}
        >
          <ListItemText primary={"WINRATE"} />
        </ListItem>
        <Divider light />
        <ListItem
          secondaryAction={<ListItemText primary={playRates.rocks} />}
        >
          <LandscapeIcon fontSize="small" />
        </ListItem>
        <Divider light />
        <ListItem
          secondaryAction={<ListItemText primary={playRates.papers} />}
        >
          <FeedIcon fontSize="small" />
        </ListItem>
        <Divider light />
        <ListItem
          secondaryAction={<ListItemText primary={playRates.scissors} />}
        >
          <ContentCutIcon fontSize="small" />
        </ListItem>
      </List>
    </div>
  )
}

const playerOutcome = (game, name) => {
  const result = getWinner(game)
  if (!result) {
    return 'DRAW'
  }
  return result.name === name ? 'WIN' : 'LOSS'
}

export default Profile
