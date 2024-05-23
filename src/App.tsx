import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Outlet } from "react-router-dom";
import { AuthInit } from "./components/auth/Auth";

function App() {
  return (
    <>
      <AuthInit>
        <Outlet />
      </AuthInit>
    </>
  );
}

export default App;
