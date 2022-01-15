const DisplayGame = game => {
    return (
      <div>
        <h4>
          {game.playerA.name} VS {game.playerB.name}
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