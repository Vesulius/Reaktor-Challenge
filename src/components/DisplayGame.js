import { setProfileVal } from '../reducers/profileReducer'
import { getWinner } from '../utility'

const DisplayGame = (game, dispatch) => {
  const handleClick = name => event => {
    event.preventDefault()
    dispatch(setProfileVal(name))
  }
  return (
    <div key={game.gameId}>
      <h4>
        <a href="" onClick={handleClick(game.playerA.name)}>
          {game.playerA.name}
        </a>
        VS
        <a href="" onClick={handleClick(game.playerB.name)}>
          {game.playerB.name}
        </a>
      </h4>
      <ol>{getResult(game)}</ol>
    </div>
  )
}

const getResult = game => {
  if (game.type !== 'GAME_RESULT') return 'Playing...'
  const winner = getWinner(game)
  if (!winner) { return 'DRAW' }
  return `Winner – ${winner.name}`
}

export default DisplayGame
