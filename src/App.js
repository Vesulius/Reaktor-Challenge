import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Profile from './components/Profile'
import historyService from './services/history'
import LiveList from './components/LiveList'
import { addGames } from './reducers/playedGamesReducer'

const App = () => {
  const [profile, setProfile] = useState(null)
  const playedGames = useSelector(state => state.playedGames)
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
    <div className="App">
      <LiveList setProfile={setProfile} />
      {Profile(playedGames, profile)}
    </div>
  )
}

const noDuplicates = arr => {
  return  Array.from(new Set(arr)).length === arr.length
}

export default App
