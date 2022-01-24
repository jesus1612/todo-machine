//import './App.css';
import React from 'react';
// Components
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const defaultTodos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'Hacer tarea', completed: true },
  { text: 'Comer', completed: false }
]

function App(props) {

  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  return (
    <>
      <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {
          todos.map( (todo, index) => (
            <TodoItem key={index} text={todo.text} completed={todo.completed}/>
          ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
