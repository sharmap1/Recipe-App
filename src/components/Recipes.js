import React from "react";
import RecipeItem from "./RecipeItem";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    // width: "100%",
    // fontSize: "10px",
  },
}));

const Recipes = ({ recipes }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        {recipes.map((recipe) => (
          <Grid item xs={6} className={classes.grid}>
            <RecipeItem
              key={Math.random() * 100}
              name={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredientLines={recipe.recipe.ingredientLines}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Recipes;
