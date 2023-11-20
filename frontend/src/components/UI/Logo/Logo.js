import React from "react";
import classes from "./Logo.module.css";

const Logo = ({ hasText = true }) => (
  <div className={classes.root}>
    <div className={classes.initial}>J</div>
    {hasText && <h1 className={classes.text}>Jomble</h1>}
  </div>
);

export default Logo;
