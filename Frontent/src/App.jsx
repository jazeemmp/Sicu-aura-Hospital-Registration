import React from "react";
import "./App.css";
import SignupPage from "./Pages/SignupPage";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { Toaster } from "sonner";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
      <Toaster
        richColors
        position="top-center"
        toastOptions={{
          className: "p-4 my-2",
        }}
      />
    </>
  );
};

function ProtectedRoute() {
  const auth = localStorage.getItem("token");
  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default App;
