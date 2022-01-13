const DisplayGame = game => {
    return (
      <div>
        <h4>
          {game.playerA} VS {game.playerB}
        </h4>
        <ol>{getResult(game)}</ol>
      </div>
    )
  }
  
  // the order of this list matters for getResult function
  const results = ['ROCK', 'PAPER', 'SCISSORS']
  
  const getResult = game => {
    if (game.result === null) return 'Playing...'
    const resultA = results.indexOf(game.result.playsA)
    const resultB = results.indexOf(game.result.playsB)
    if (resultA === resultB) return 'DRAW'
    if (resultA + 1 === resultB || !(resultA - 1 === resultB))
      return `Winner ${game.playerB}`
    return `Winner ${game.playerA}`
  }

export default DisplayGame