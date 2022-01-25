import React from "react";
import '../styles/TodoSearch.css'
import {TodoContext } from "../TodoContext"
const TodoSearch = () => {

  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }

  return(
    <input
      placeholder='cebolla'
      className="TodoSearch"
      value={searchValue}
      onChange={onSearchValueChange}
    />)
};

export { TodoSearch };