import React from "react";
import '../styles/TodoSearch.css'

const TodoSearch = ({searchValue, setSearchValue}) => {

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