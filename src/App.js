import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const APP_ID = "b20cae72";
  const APP_KEY = "7f92d83712fb1d22ac58cd5e48c8e7b7";
  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const updateSearch = (e) => {
    setSerach(e.target.value);
  };

  const onSearchClick = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <>
    <div className="App">
      <Header
        search={search}
        updateSearch={updateSearch}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>

    
    </>
  );
}

export default App;
