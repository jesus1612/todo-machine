import React from 'react';
import '../styles/TodoItem.css';

function TodoItem(props) {

  const onComplete = () => {
    props.onComplete()
  }

  const onDelete = () => {
    props.onDelete()
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
      className={`material-icons Icon Icon-delete ${props.completed ? 'Icon-delete--active': ''}`}
      onClick={onDelete}
      >
        close
      </span>
    </li>
  );
}

export { TodoItem };

