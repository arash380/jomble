import React from "react";
import { Button, Input } from "arash-react-components";
import { useNavigate } from "react-router-dom";
import Logo from "../../UI/Logo/Logo";
import rd from "../../routing/routeData";
import { login } from "../../../services/api/authAxios";
import { useUser } from "../../../contexts/UserContext";
import classes from "./Auth.module.css";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const onLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    try {
      const token = await login(email, pass);
      setUser(token);
      navigate(rd.default);
    } catch {}
  };

  return (
    <>
      <div className={classes.legoContainer}>
        <Logo />
        <h1>Jomble</h1>
      </div>

      <form className={classes.form} onSubmit={onLogin}>
        <Input name="email" placeholder="Email" type="email" required />
        <Input name="password" placeholder="Password" type="password" required />
        <Button type="submit">Login</Button>
      </form>

      <Button variant="text" className={classes.footerBtn} onClick={() => navigate(rd.register)}>
        Not Registered?
      </Button>
    </>
  );
};

export default Login;
