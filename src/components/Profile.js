import { useSelector } from 'react-redux'

import { getWinner } from '../utility'

const Profile = () => {
  const name = useSelector(state => state.profile)
  const games = useSelector(state => state.playedGames)

  if (!games) {
    return <div>NO PROFILE SELECTED</div>
  }

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

const playerOutcome = (game, name) => {
  const result = getWinner(game)
  if (!result) {return 'DRAW'}
  return result.name === name ? 'WIN' : 'LOSS'
}

export default Profile
