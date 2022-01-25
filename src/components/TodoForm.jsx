import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("")

  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onCancel= () => {
    setNewTodoValue("")
    setOpenModal(false)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setNewTodoValue("")
    setOpenModal(false)
  }

  return(
    <form onSubmit={onSubmit}>
      <label htmlFor="">Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        placeholder="Nombre de la tarea"
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
            type="button"
            onClick={onCancel}
            className="TodoForm-button TodoForm-button--cancel"
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Crear
        </button>
      </div>
    </form>
  )
}

export {
  TodoForm
}