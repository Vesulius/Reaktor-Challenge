import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import DisplayGame from './DisplayGame'

const game = {
    playerA: 'Mielikki Koskinen',
    playerB: 'Tuuri Jokinen',
    result: null,
    id: `Mielikki KoskinenTuuri Jokinen`
}


test('renders content without result', () => {
  const component = render(
    DisplayGame(game)
  )

  expect(component.container).toHaveTextContent(
    'Mielikki Koskinen VS Tuuri Jokinen'
  )
})

test('renders content with result', () => {
  const result = {
    playsA: 'ROCK',
    playsB: 'PAPER'
  }
  const newGame = {
    ...game,
    result
  }

  const component = render(
    DisplayGame(newGame)
  )

  expect(component.container).toHaveTextContent(
    'Mielikki Koskinen VS Tuuri Jokinen'
  )
  expect(component.container).toHaveTextContent(
    'Winner Mielikki Koskinen'
  )
})