import React from "react";
import '../styles/TodoSearch.css'

const TodoSearch = () => {

  const onSearchValueChange = (event) =>{
    console.log(event.target.value)
  }
  return(
    <input
      placeholder='cebolla'
      className="TodoSearch"
      onChange={onSearchValueChange}
    />
  );
};

export { TodoSearch };