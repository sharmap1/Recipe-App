import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "500px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  font: {
    textDecoration: "underline",
    fontSize: "10px",
  },
  // overrides: {
  //   MuiPaper: {
  //     root: {
  //       backgroundColor: "plum",
  //     },
  //   },
  // },
}));

const RecipeItem = ({ name, image, ingredientLines }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  return (
    <StylesProvider>
      <Card className={classes.root}>
        <CardHeader
          title={name}
          style={{
            color: "yellow",
            backgroundColor: "#345c81",
          }}
        />

        <CardMedia className={classes.media} image={image} />

        <CardActions
          style={{
            color: "yellow",
            backgroundColor: "#345c81",
          }}
        >
          <Typography>Ingredients</Typography>
          <IconButton
            style={{
              color: "yellow",
              fontSize: "20px",
            }}
            size="small"
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent
            style={{
              color: "black",
              padding: "0",
              fontWeight: "bold",
            }}
          >
            <Typography
              paragraph
              style={{
                marginBottom: "0px",
              }}
            >
              {ingredientLines.map((ingredient) => (
                <li
                  className="list-group-item"
                  style={{
                    backgroundColor: "lightblue",
                    padding: "10px",
                    fontSize: "15px",
                  }}
                >
                  {ingredient}
                </li>
              ))}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </StylesProvider>
  );
};

export default RecipeItem;
