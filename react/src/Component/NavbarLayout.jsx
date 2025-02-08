import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router-dom";
export default function NavbarLayout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}
