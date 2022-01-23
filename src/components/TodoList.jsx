import React from "react";
import '../styles/TodoList.css'

const TodoList = (props) => (
  <section>
    <ul>
      {props.children}
    </ul>
  </section>
);

export { TodoList };
