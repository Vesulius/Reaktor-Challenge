import { useDispatch } from 'react-redux' 
import { useEffect } from 'react'

const useLiveGames = () => {
    const dispatch = useDispatch()
  
    useEffect(() => {
      const socet = new WebSocket('https://afternoon-meadow-18887.herokuapp.com/ws://bad-api-assignment.reaktor.com/rps/live')
      socet.onmessage = message => {
        const data = JSON.parse(JSON.parse(message.data))
        dispatch(data)
      }
      return () => {
        socet.close()
      }
    },[])
}

export default useLiveGames