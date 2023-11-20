import React from "react";
import { Avatar } from "@mui/material";
import { useUser } from "../../../contexts/UserContext";
import classes from "./UserAvatar.module.css";

const UserAvatar = ({ customUser, className, ...other }) => {
  const { user } = useUser();

  return (
    <Avatar
      className={`${classes.root} ${className}`}
      // TODO: customUser ? customUser.pfp : user.pfp
      src="https://avatars.githubusercontent.com/u/60730507"
      {...other}
    >
      {customUser
        ? `${customUser.firstName[0]}${customUser.lastName[0]}`
        : `${user.firstName[0]}${user.lastName[0]}`}
    </Avatar>
  );
};

export default UserAvatar;
