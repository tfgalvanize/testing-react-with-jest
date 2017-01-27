/* eslint-env jest, jasmine */

import { toggleDone, deleteTodo } from '../app/state-functions'

describe('tooggleDone completes an incomplete todo', () => {
  it('completes an incomplete todo', () => {
    const startState = {
      todos: [{ id: 1, done: false, text: 'Buy Milk' }]
    }

    const finState = toggleDone(startState, 1)

    expect(finState.todos).toEqual([
      { id: 1, done: true, text: 'Buy Milk' }
    ])
  })
})

describe('deleteTodo deletes the todo it is given', () => {
  it('deletes the todo it is given', () => {
    const startState = {
      todos: [{ id: 1, done: false, text: 'Buy Milk' }]
    }

    const finState = deleteTodo(startState, 1)

    expect(finState.todos).toEqual([])
  })
})
