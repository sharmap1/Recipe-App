import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    margin: "30px auto",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));
const Header = ({ search, updateSearch, onSearchClick }) => {
  const classes = useStyles();
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <i class="material-icons brand-icon">tapas</i> Food Recipe
      </h1>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          inputProps={{ "aria-label": "search google maps" }}
          placeholder="Search Your Recipe..."
          value={search}
          onChange={updateSearch}
        />
        <IconButton
          type="submit"
          onClick={onSearchClick}
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Header;
