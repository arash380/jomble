import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";

const Layout = () => (
  <div className={classes.root}>
    <Box component="main" className={classes.contentContainer}>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Box>
  </div>
);

export default Layout;
