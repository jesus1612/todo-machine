import logo from './logo.svg';
import './App.css';

// Components
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const todos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'Hacer tarea', completed: false },
  { text: 'Comer', completed: false }
]

function App(props) {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map( (todo, index) => (
            <TodoItem key={index} text={todo.text}/>
          ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
