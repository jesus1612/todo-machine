import React from 'react';
import '../styles/TodoCounter.css'

const TodoCounter = ({completedTodos, totalTodos}) => (
  <h2 className='TodoCounter'>
  Has completado {completedTodos} de {totalTodos} {totalTodos > 1 ? "Todos" : "Todo"}
  </h2>
);

export { TodoCounter };