import React from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoProvider = ({children}) => {
  return (
    <div>
        <TodoContext.Provider value={{}}>
          {children}
        </TodoContext.Provider>
    </div>
  )
}
export default TodoProvider