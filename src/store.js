import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import liveGamesReducer from './reducers/liveGamesReducer'
import playedGamesReducer from './reducers/playedGamesReducer'
import profileReducer from './reducers/profileReducer'

const reducer = combineReducers({
  playedGames: playedGamesReducer,
  liveGames: liveGamesReducer,
  profile: profileReducer
})
const Store = () => createStore(
    reducer,
    composeWithDevTools()
)

export default Store