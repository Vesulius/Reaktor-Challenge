const playedGamesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GAMES':
      return action.data
    default:
      return state
  }
}

export const addGames = games => {
  return {
    type: 'ADD_GAMES',
    data: games
  }
}

export default playedGamesReducer
