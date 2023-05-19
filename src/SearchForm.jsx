import React, { useState } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const [title, setTitle] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    if (!searchValue) return;
    console.log(searchValue);
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          value={title}
          placeholder="cat"
        ></input>
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
