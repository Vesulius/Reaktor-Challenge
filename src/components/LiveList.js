import React, { useEffect, useState } from 'react'
import DisplayGame from './DisplayGame'

const LiveList = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const socet = new WebSocket('ws://bad-api-assignment.reaktor.com/rps/live')
    socet.onmessage = message => {
      const data = JSON.parse(JSON.parse(message.data))
      if (data.type === 'GAME_BEGIN') {
        setNewGame(data)
      } else if (data.type === 'GAME_RESULT') {
        setGameResult(data)
      }
    }
    return () => {
      socet.close()
    }
  })

  const setNewGame = data => {
    const newGames = games.length > 100 ? games.slice(-100) : games
    const newGame = {
      playerA: data.playerA.name,
      playerB: data.playerB.name,
      result: null,
      id: `${data.playerA.name}${data.playerB.name}`
    }
    setGames([...newGames, newGame])
  }

  const setGameResult = data => {
    const game = games.find(
      game => game.id === `${data.playerA.name}${data.playerB.name}`
    )
    if (game) {
      const result = {
        playsA: data.playerA.played,
        playsB: data.playerB.played
      }
      const newGame = {
        ...game,
        result
      }
      setGames(games.map(g => (g.id === newGame.id ? newGame : g)))
    }
  }

  return (
    <div>
      {games.map(game => {
        return DisplayGame(game)
      })}
    </div>
  )
}

export default LiveList
