import React from "react";
import "./App.css";
import SignupPage from "./Pages/SignupPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
