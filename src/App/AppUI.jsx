import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import {Modal} from '../components/Modal'
function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
  return(
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        { error && <p>Desesperate, hubo un error</p> }
        { loading && <p>Estamos cargando, no desesperes</p> }
        {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p> }
        {
          searchedTodos.map( (todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <p>{searchedTodos[0]?.text}</p>
        </Modal>
      )}
      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal}/>
    </>
  );
}

export { AppUI }