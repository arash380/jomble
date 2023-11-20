import React from "react";
import { Button, Input } from "arash-react-components";
import { useNavigate } from "react-router-dom";
import rd from "../../routing/routeData";
import Logo from "../../UI/Logo/Logo";
import { createUser } from "../../../services/api/authAxios";
import { useUser } from "../../../contexts/UserContext";
import classes from "./Auth.module.css";

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const onRegister = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const token = await createUser({ firstName, lastName, email, password });
      setUser(token);
      navigate(rd.default);
    } catch {}
  };

  return (
    <>
      <Logo />
      <form className={classes.form} onSubmit={onRegister}>
        <Input placeholder="First Name" name="firstName" />
        <Input placeholder="Last Name" name="lastName" />
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Password" type="password" name="password" />
        <Button type="submit">Register</Button>
      </form>

      <Button variant="text" className={classes.footerBtn} onClick={() => navigate(rd.login)}>
        Already Registered?
      </Button>
    </>
  );
};

export default Register;
