import React from "react";
import { Container } from "@mui/material";
import "./MainContainer.css";

const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
