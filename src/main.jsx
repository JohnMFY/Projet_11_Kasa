import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router";

/** Layout components**/
import Layout from "./layout/Layout.jsx";

/** Pages **/
import Home from "./pages/Home";
import About from "./Pages/About.jsx"
import Flat from "./Pages/Flat.jsx"
import Error from "./Pages/Error.jsx"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/appartement/:id" element={<Flat/>}/>
        <Route path="*"  element={<Error/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);