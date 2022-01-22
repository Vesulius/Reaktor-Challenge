// the order of this list matters for getWinner function
const results = ['ROCK', 'PAPER', 'SCISSORS']

export const getWinner = game => {
  if (game.type !== 'GAME_RESULT') return 'Playing...'
  const resultA = results.indexOf(game.playerA.played)
  const resultB = results.indexOf(game.playerB.played)
  if (resultA === resultB) return null
  if (resultA + 1 === resultB || !(resultA - 1 === resultB)) return game.playerB
  return game.playerA
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
