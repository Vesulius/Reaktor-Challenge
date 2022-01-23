import Container from '@material-ui/core/Container'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Profile from './components/PlayerStats'
import historyService from './services/history'
import LiveList from './components/LiveList'
import { addGames } from './reducers/playedGamesReducer'
import RPSBar from './components/RPSBar'
import PlayedList from './components/PlayedList'

const App = () => {
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
      <RPSBar />
      <LiveList />
      <PlayedList />
    </Container>
  )
}

const noDuplicates = arr => {
  return Array.from(new Set(arr)).length === arr.length
}

export default App
