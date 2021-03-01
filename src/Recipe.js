import React from "react";

const Recipe = ({ title, image, ingredients }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={image} alt="recipeImage" />
      <ol>
        {ingredients.map((ingredient) => (
          <li>
            {/* {key=ingredient.text} */}
            {ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
