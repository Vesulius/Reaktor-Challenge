import { Grid } from '@material-ui/core'
import Skeleton from '@mui/material/Skeleton'

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

  if (games.length === 0) {
    return (
      <div style={{ marginTop: 30, padding: 30 }}>
        <Grid container spacing={2} justifyContent="space-evenly">
          <Grid item xs={6}>
            <Skeleton variant="rectangular" width={400} height={118} />
          </Grid>
          <Grid item xs={4}>
            <Skeleton variant="rectangular" width={400} height={118} />
          </Grid>
          <Grid item xs={6}>
            <Skeleton variant="rectangular" width={400} height={118} />
          </Grid>
          <Grid item xs={4}>
            <Skeleton variant="rectangular" width={400} height={118} />
          </Grid>
        </Grid>
      </div>
    )
  }

  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={5} justifyContent="center">
        {games.sort((game1, game2) => game2.time - game1.time).map(game => {
          return DisplayGame(game, dispatch)
        })}
      </Grid>
    </div>
  )
}

export default LiveList
