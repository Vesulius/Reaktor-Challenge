import React, { useEffect, useState } from 'react'
import DisplayGame from './DisplayGame'

const LiveList = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const socet = new WebSocket('ws://bad-api-assignment.reaktor.com/rps/live')
    socet.onmessage = message => {
      const data = JSON.parse(JSON.parse(message.data))
      console.log(games);
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
      ...data,
      playersId: `${data.playerA.name}${data.playerB.name}`
    }
    setGames([...newGames, newGame])
  }

  const setGameResult = data => {
    const game = games.find(
      game => game.playersId === `${data.playerA.name}${data.playerB.name}`
    )
    if (game) {
      const newGame = {
        ...game,
        playerA: data.playerA,
        playerB: data.playerB,
        t: data.t,
        type: data.type,
      }
      setGames(games.map(g => (g.playersId === newGame.playersId ? newGame : g)))
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
