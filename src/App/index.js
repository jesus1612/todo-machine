import React from 'react';
import { AppUI } from './AppUI';


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

  let searchedTodos = []

  if(!searchedTodos >=1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)

    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)

  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)

  };
  return (
    <AppUI
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
    />
  );
}
export default App;
