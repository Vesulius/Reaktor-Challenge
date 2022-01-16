import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import historyService from './services/history'
import LiveList from './components/LiveList'

const App = () => {
  const [games, setGames] = useState([])
  const [profile, setProfile] = useState(null)

  useEffect(async () => {
    const response = await historyService.getFirstPage()
    setGames(response.data)
  }, [])



  return (
    <div className="App">
      <LiveList setProfile={setProfile} />
      {Profile(games, profile)}
    </div>
  )
}

export default App
