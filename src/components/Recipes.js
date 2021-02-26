import React from "react";
import RecipeItem from "./RecipeItem";
import Grid from "@material-ui/core/Grid";

const Recipes = ({ recipes }) => {
  return (
    <Grid container>
      {recipes.map((recipe) => (
        <Grid item xs={3}>
          <RecipeItem
            key={Math.random() * 100}
            name={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredientLines={recipe.recipe.ingredientLines}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Recipes;
