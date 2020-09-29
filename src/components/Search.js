import React from 'react'

const Search = ({ searchRestaurants }) => {
    return (
        <form className="form" id="addItemForm">
        <input
          type="text"
          className="input"
          id="addSearch"
          placeholder="Search Category e.g. taco pizza etc.."
          title="Search works after clearing 'localStorage.clear()' in console and F5"
        />
        
        <button className="navbarbtns" onClick={searchRestaurants}>Search</button>
        <button className="navbarbtns" onClick={() => localStorage.clear()}>Clear Selection</button>
        
      </form>
      
      
    )
}

export default Search
