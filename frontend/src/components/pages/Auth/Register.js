import React from "react";
import { Button, Input } from "arash-react-components";
import { useNavigate } from "react-router-dom";
import rd from "../../routing/routeData";
import Logo from "../../UI/Logo/Logo";
import classes from "./Auth.module.css";

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.legoContainer}>
        <Logo />
        <h1>Jomble</h1>
      </div>

      <form className={classes.form}>
        {/* TODO: use a different input component and form control? */}
        {/* TODO: register form */}
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button>Register</Button>
      </form>

      <Button variant="text" className={classes.footerBtn} onClick={() => navigate(rd.login)}>
        Already Registered?
      </Button>
    </>
  );
};

export default Register;
