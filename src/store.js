import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import playedGamesReducer from './reducers/playedGamesReducer'

const reducer = playedGamesReducer
const Store = () => createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
)

export default Store