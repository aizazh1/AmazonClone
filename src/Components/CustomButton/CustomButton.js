import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  btn: {
    background: "linear-gradient(#f0c14b,#E7F65E)",
    border: "1px solid",
    borderColor: "#a88734 #9c7e31 #846a29",
    color: "#111",
    padding: "0 5px",
    fontSize: 12,
    transition: "0.5s all ease",
    "&:hover": {
      background: "linear-gradient(#f0c14b,#E7F65E)",
      transform: "scale(1.07)",
      transition: "0.5s all ease",
    },
  },
});

const CustomButton = (props) => {
  const classes = useStyles(props);
  return (
    <Button {...props} className={classes.btn}>
      {props.children}
    </Button>
  );
};

export default CustomButton;
