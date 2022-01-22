import { compareGames } from '../utility'

const liveGamesReducer = (state = [], action) => {
  const time = new Date()
  switch (action.type) {
    case 'GAME_BEGIN':
      const newGame = {...action, time: time.getTime()}
      return state.concat(newGame)
    case 'GAME_RESULT':
      return state.map(game => compareGames(game, action) ? {...action, time: game.time } : game)
    default:
      return state
  }
}

export default liveGamesReducer
