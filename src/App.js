import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import LogIn from "./Pages/LogIn/LogIn";
import ProtectedRoutes from "./Components/Layouts/ProtectedRoutes";
import Articles from "./Pages/Articles/Articles";
import ArticleForm from "./Pages/ArticleForm/ArticleForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LogIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/" Component={ProtectedRoutes}>
          <Route index Component={Articles} />
          <Route path=":action/:articleId?" Component={ArticleForm} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
