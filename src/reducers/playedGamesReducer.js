const playedGamesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GAMES':
      return [...state, action.data]
  }
}

export const addGames = games => {
  return async dispatch => {
    dispatch({
      type: 'ADD_GAMES',
      data: games
    })
  }
}

export default playedGamesReducer
