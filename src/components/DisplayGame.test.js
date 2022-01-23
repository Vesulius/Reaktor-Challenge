import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import DisplayGame from './DisplayGame'

const gameBegin = {
  gameId: '59951762c1006991ca1e2',
  playerA: { name: 'Mielikki Koskinen' },
  playerB: { name: 'Tuuri Jokinen' },
  time: 1642879923848,
  type: 'GAME_BEGIN'
}

const gameResultDraw = {
  gameId: '59951762c1006991ca1e2',
  playerA: { name: 'Mielikki Koskinen', played: 'ROCK' },
  playerB: { name: 'Tuuri Jokinen', played: 'ROCK' },
  time: 1642879923848,
  type: 'GAME_RESULT'
}

const gameResultWin = {
  gameId: '59951762c1006991ca1e2',
  playerA: { name: 'Mielikki Koskinen', played: 'ROCK' },
  playerB: { name: 'Tuuri Jokinen', played: 'SCISSORS' },
  time: 1642879923848,
  type: 'GAME_RESULT'
}

test('renders content without result', () => {
  const component = render(DisplayGame(gameBegin))

  expect(component.container).toHaveTextContent('Mielikki Koskinen')
  expect(component.container).toHaveTextContent('Tuuri Jokinen')
  expect(component.container).toHaveTextContent('PLAYING')
})

test('renders content with draw result', () => {
  const component = render(DisplayGame(gameResultDraw))

  expect(component.container).toHaveTextContent('Mielikki Koskinen')
  expect(component.container).toHaveTextContent('Tuuri Jokinen')
  expect(component.container).toHaveTextContent('DRAW')
})

test('renders content with win/loss result', () => {
  const component = render(DisplayGame(gameResultWin))

  expect(component.container).toHaveTextContent('Mielikki Koskinen')
  expect(component.container).toHaveTextContent('Tuuri Jokinen')
  expect(component.container).toHaveTextContent('WIN')
})