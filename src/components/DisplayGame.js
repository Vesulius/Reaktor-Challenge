const DisplayGame = (game, setProfile) => {

  const handleClick = name =>  event => {
    event.preventDefault()
    setProfile(name)
  }

  return (
    <div>
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

// the order of this list matters for getResult function
const results = ['ROCK', 'PAPER', 'SCISSORS']

const getResult = game => {
  if (game.type !== 'GAME_RESULT') return 'Playing...'
  const resultA = results.indexOf(game.playerA.played)
  const resultB = results.indexOf(game.playerB.played)
  if (resultA === resultB) return 'DRAW'
  if (resultA + 1 === resultB || !(resultA - 1 === resultB))
    return `Winner ${game.playerB.name}`
  return `Winner ${game.playerA.name}`
}

export default DisplayGame
