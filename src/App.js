import Container from '@material-ui/core/Container'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Profile from './components/Profile'
import historyService from './services/history'
import LiveList from './components/LiveList'
import { addGames } from './reducers/playedGamesReducer'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const [profile, setProfile] = useState(null)

  const dispatch = useDispatch()

  useEffect(async () => {
    let cursor = '/rps/history'
    let games = []
    do {
      const response = await historyService.getPage(cursor)
      games = games.concat(response.data)
      cursor = response.cursor
    } while (noDuplicates(games.map(g => g.t)))
    dispatch(addGames(Array.from(new Set(games))))
  }, [])

  return (
    <Container>
      <div className="App">
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar> */}
        <LiveList setProfile={setProfile} />
        {Profile(profile)}
      </div>
    </Container>
  )
}

const noDuplicates = arr => {
  return Array.from(new Set(arr)).length === arr.length
}

export default App
