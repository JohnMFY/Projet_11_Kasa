import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} errorElement={<h1>TEST ERROR</h1>}/>
      <Route path="/about" element={<div>A propos</div>}/>
      <Route path="/appartement" element={<div>Appartement</div>}/>
      <Route path="/*"  element={<div>Error 404</div>}/>
    </Routes>
  </BrowserRouter>
);