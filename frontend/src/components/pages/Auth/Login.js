import React from "react";
import { Button, Input } from "arash-react-components";
import { useNavigate } from "react-router-dom";
import Logo from "../../UI/Logo/Logo";
import rd from "../../routing/routeData";
import classes from "./Auth.module.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.legoContainer}>
        <Logo />
        <h1>Jomble</h1>
      </div>

      <form className={classes.form}>
        {/* TODO: use a different input component and form control? */}
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button>Login</Button>
      </form>

      <Button variant="text" className={classes.footerBtn} onClick={() => navigate(rd.register)}>
        Not Registered?
      </Button>
    </>
  );
};

export default Login;
