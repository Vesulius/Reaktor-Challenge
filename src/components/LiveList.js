import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DisplayGame from './DisplayGame'
import { addGame, addResult } from '../reducers/liveGamesReducer'

const LiveList = () => {
  const games = useSelector(state => state.liveGames)
  const dispatch = useDispatch()

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
    const newGame = {
      ...data,
      playersId: `${data.playerA.name}${data.playerB.name}`
    }
    dispatch(addGame(newGame))
  }

  const setGameResult = data => {
    dispatch(addResult(data, `${data.playerA.name}${data.playerB.name}`))
  }

  return (
    <div>
      {games.map(game => {
        return DisplayGame(game, dispatch)
      })}
    </div>
  )
}

export default LiveList
