import { compareGames } from '../utility'

const liveGamesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GAME_BEGIN':
      return state.concat(action)
    case 'GAME_RESULT':
      return state.map(game => compareGames(game, action) ? action : game)
    default:
      return state
  }
}

export default liveGamesReducer
