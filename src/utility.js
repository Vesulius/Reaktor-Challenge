// the order of this list matters for getWinner function
const results = ['ROCK', 'PAPER', 'SCISSORS']

export const playerOutcome = ({game, player}) => {
  const player2 = game.playerA === player ? game.playerB : game.playerA

  const result1 = results.indexOf(player.played)
  const result2 = results.indexOf(player2.played)

  if (result1 === result2) return 'DRAW'
  return (result2 + 1 === result1 || !(result2 - 1 === result1)) ? 'WIN' : 'LOSS' 
}

// returns true if given games have same players, order dosent matter
export const compareGames = (game1, game2) => {
  return (
    (game1.playerA.name === game2.playerA.name &&
      game1.playerB.name === game2.playerB.name) ||
    (game1.playerA.name === game2.playerB.name &&
      game1.playerB.name === game2.playerA.name)
  )
}
