import React from 'react';
import { AppUI } from './AppUI';


const defaultTodos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'Hacer tarea', completed: true },
  { text: 'Comer', completed: false }
]

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue)

  React.useEffect(()=> {
    setTimeout(() =>{
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;

        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)

      } catch (err) {
        setError(err)
      }
    }, 1000)
  })


  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

function App(props) {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);


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
    saveTodos(newTodos)

  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)

  };

  return (
    <AppUI
      loading={loading}
      error={error}
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
