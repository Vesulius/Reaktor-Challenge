const History = (games, name) => {

  const playerGames = games
    .filter(game => {
      return game.playerA.name === name || game.playerB.name === name
    })
    .map(game => {
      return {
        played:
          game.playerA.name === name
            ? game.playerA.played
            : game.playerB.played,
        result: playerOutcome(game, name)
      }
    })

  if (playerGames.length === 0) {
    return <div>NO DATA</div>
  }

  const winrate =
    playerGames.reduce((total, game) => {
      return game.result === 'WIN' ? total + 1 : total
    }, 0) / playerGames.length

  const playRates = playerGames.reduce(
    (total, game) => {
      switch (game.played) {
        case 'ROCK':
          return { ...total, rocks: total.rocks + 1 }
        case 'PAPER':
          return { ...total, papers: total.papers + 1 }
        case 'SCISSORS':
          return { ...total, scissors: total.scissors + 1 }
      }
    },
    {
      rocks: 0,
      papers: 0,
      scissors: 0
    }
  )

  return (
    <div>
      <h4>PLAYER: {name}</h4>
      <p>MATCHES: {playerGames.length}</p>
      <p>WINRATE: {winrate}</p>
      <p>ROCK: {playRates.rocks}</p>
      <p>PAPER: {playRates.papers}</p>
      <p>SCISSORS: {playRates.scissors}</p>
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
    return `${game.playerB.name}`
  return `${game.playerA.name}`
}

const playerOutcome = (game, name) => {
  const result = getResult(game)
  if (result === 'DRAW') return 'DRAW'
  return result === name ? 'WIN' : 'LOSS'
}

export default History
