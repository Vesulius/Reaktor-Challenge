import { useDispatch } from 'react-redux' 
import { useEffect } from 'react'

import historyService from '../services/history'
import { addGames } from '../reducers/playedGamesReducer'

const usePlayedGames = () => {
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
}

const noDuplicates = arr => {
    return Array.from(new Set(arr)).length === arr.length
}

export default usePlayedGames