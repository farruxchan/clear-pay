import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeOutlet } from "./ThemeOutlet.style";

export const StyledOutlet = () => {
  return (
    <ThemeOutlet>
      <Outlet />
    </ThemeOutlet>
  );
};