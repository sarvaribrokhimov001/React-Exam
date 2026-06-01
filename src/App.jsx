import React from 'react'
import Todo from './Todo'
import TodoProvider from './lib/TodoProvider'

const App = () => {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  )
}
export default App