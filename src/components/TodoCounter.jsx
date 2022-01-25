import React from 'react';
import '../styles/TodoCounter.css'
import { TodoContext } from '../TodoContext';

const TodoCounter = () => {

  const {totalTodos, completedTodos} = React.useContext(TodoContext)

  return(
    <h2 className='TodoCounter'>
      Has completado {completedTodos} de {totalTodos} {totalTodos > 1 ? "Todos" : "Todo"}
    </h2>
);}

export { TodoCounter };