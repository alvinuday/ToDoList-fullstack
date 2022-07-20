import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./views/Home.jsx";
import Dashboard from "./views/Dashboard.jsx";
// import Login from "./components/Login.jsx";
import useToken from "./utils/useToken.jsx";
import "./App.css";

export default function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <HomePage setToken={setToken} />;
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage setToken={setToken} />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}
