import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import liveGamesReducer from './reducers/liveGamesReducer'
import playedGamesReducer from './reducers/playedGamesReducer'

const reducer = combineReducers({
  playedGames: playedGamesReducer,
  liveGames: liveGamesReducer,
})
const Store = () => createStore(
    reducer,
    composeWithDevTools()
)

export default Store