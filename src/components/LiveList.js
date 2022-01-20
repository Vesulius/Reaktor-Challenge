import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DisplayGame from './DisplayGame'

const LiveList = () => {
  const games = useSelector(state => state.liveGames)
  const dispatch = useDispatch()

  useEffect(() => {
    const socet = new WebSocket('ws://bad-api-assignment.reaktor.com/rps/live')
    socet.onmessage = message => {
      const data = JSON.parse(JSON.parse(message.data))
      dispatch(data)
    }
    return () => {
      socet.close()
    }
  })

  return (
    <div>
      {games.map(game => {
        return DisplayGame(game, dispatch)
      })}
    </div>
  )
}

export default LiveList
