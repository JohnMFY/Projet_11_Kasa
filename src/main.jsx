import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Nav from "./components/Nav.jsx";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/about" element={<Nav/>}/>
      <Route path="/appartement" element={<Nav/>}/>
      <Route path="*"  element={<h1>Error 404</h1>}/>
    </Routes>
  </BrowserRouter>
);