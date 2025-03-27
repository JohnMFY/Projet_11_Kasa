import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./Pages/About.jsx"
import Flat from "./Pages/Flat.jsx"
import Error from "./Pages/Error.jsx"

const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Nav/>}/>
        <Route path="/appartement" element={<Nav/>}/>
        <Route path="*"  element={<Error/>}/>
   
    </Routes>
  </BrowserRouter>
);

/*
<Route path="/" element={<layout/>}>
</Route>  
*/