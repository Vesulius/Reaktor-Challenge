const liveGamesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GAME':
      return state.concat(action.game)
    case 'ADD_RESULT':
      return state.map(game => game.playersId === action.result.playersId ? action.result : game)
    default:
      return state
  }
}

export const addGame = game => {
  return {
    type: 'ADD_GAME',
    game
  }
}

export const addResult = (result, playersId) => {
  return {
    type: 'ADD_RESULT',
    result,
    playersId
  }
}

export default liveGamesReducer
