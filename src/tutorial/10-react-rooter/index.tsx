import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./Home";
import UsersList from "./UsersList";
import User from "./User";
import Error from "./Error";

// navbar
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default ReactRouterSetup;
