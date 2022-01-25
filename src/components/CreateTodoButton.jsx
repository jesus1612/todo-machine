import React from "react";
import '../styles/CreateTodoButton.css'

const CreateTodoButton = (props) => {
  
  const onClickButton = () => {
    props.setOpenModal(!props.openModal)
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