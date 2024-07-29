import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import LogIn from "./Pages/LogIn/LogIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LogIn} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
