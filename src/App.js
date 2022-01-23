//import './App.css';

// Components
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const todos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'Hacer tarea', completed: true },
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
            <TodoItem key={index} text={todo.text} completed={todo.completed}/>
          ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
