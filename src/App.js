import Container from '@material-ui/core/Container'

import React from 'react'

import LiveList from './components/LiveList'
import RPSBar from './components/RPSBar'
import PlayedList from './components/PlayedList'
import usePlayedGames from './hooks.js/usePlayedGames'
import useLiveGames from './hooks.js/useLiveGames'

const App = () => {
  usePlayedGames()
  useLiveGames()

  return (
    <Container>
      <RPSBar />
      <LiveList />
      <PlayedList />
    </Container>
  )
}

export default App
