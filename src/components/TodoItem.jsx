import React from "react";

const TodoItem = (props) => (
  <li>
      <span>C</span>
    <p>
      {props.text}
    </p>
    <span>x</span>
  </li>
);

export { TodoItem };