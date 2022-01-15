import { useEffect, useState } from 'react'
import Profile from "./components/Profile"
import historyService from './services/history'

const App = () => {
  const [games, setGames] = useState([])

  useEffect(async () => {
    const response = await historyService.getFirstPage()
    setGames(response.data)
  }, [])

  
  return (
    <div className="App">
      {/* <LiveList /> */}
      {Profile(games, 'Marjatta Jokinen')}
    </div>
  )
}

export default App
