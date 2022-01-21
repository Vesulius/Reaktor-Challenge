import Container from '@material-ui/core/Container'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Profile from './components/Profile'
import historyService from './services/history'
import LiveList from './components/LiveList'
import { addGames } from './reducers/playedGamesReducer'

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
