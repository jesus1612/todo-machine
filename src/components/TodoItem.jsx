import React from 'react';
import '../styles/TodoItem.css';

function TodoItem(props) {

  const onComplete = () => {
    alert("Tarea terminada" + props.text)
  }

  const onDelete = () => {
    alert("Borraste el todo " + props.text)
  }

  return (
    <li className="TodoItem">
      <span
        className={`material-icons Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        done
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
      className={`Icon Icon-delete ${props.completed ? 'Icon-delete--active': ''}`}
      onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };

