import React from "react";
import '../styles/CreateTodoButton.css'

const CreateTodoButton = () => {
  
  const onClickButton = () => {
    alert("Cliqueado")
  }
  return (
    <button
    className="CreateTodoButton"
    onClick={onClickButton}
    >
      +
    </button>
);}

export {CreateTodoButton};