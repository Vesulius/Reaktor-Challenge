import React, { useEffect, useState } from 'react'

const LiveList = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const socet = new WebSocket('ws://bad-api-assignment.reaktor.com/rps/live')
    socet.onmessage = message => {
      const data = JSON.parse(JSON.parse(message.data))
      console.log(data)
      if (data.type === 'GAME_BEGIN') {
        const newGames = games.length > 200 ? games.slice(-200) : games
        const newGame = {
          playerA: data.playerA.name,
          playerB: data.playerB.name,
          result: null,
          id: `${data.playerA.name}${data.playerB.name}`
        }
        console.log(games)
        setGames([...newGames, newGame])
      } else if (data.type === 'GAME_RESULT') {
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
    }
    return () => {
      socet.close()
    }
  })

  return (
    <div>
      {games.map(game => {
        return DisplayGame(game)
      })}
    </div>
  )
}

const DisplayGame = game => {
  return (
    <div>
      <h6>
        {game.playerA} VS {game.playerB}
      </h6>
    </div>
  )
}


export default LiveList
