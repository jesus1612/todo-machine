import React from "react";

import { TodoItem } from "./TodoItem";

const TodoList = (props) => (
  <section>
    <ul>
      {props.children}
    </ul>
  </section>
);

export { TodoList };