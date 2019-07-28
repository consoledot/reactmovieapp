import React from "react";
import "./Search.css";

const Search = ({ handleChange, handleSubmit }) => (
  <form className='form' onSubmit={handleSubmit}>
    <input type="text" placeholder="Enter Movie Name" onChange={handleChange} />
  </form>
);
export default Search;
