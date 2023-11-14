import { Button } from "arash-react-components";
import React from "react";
import { useUser } from "../../../contexts/UserContext";
import classes from "./Home.module.css";

const Home = () => {
  const { logout } = useUser();

  return (
    <div className={classes.root}>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Home;
