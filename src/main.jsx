import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router";
import { Outlet } from 'react-router-dom';

/** Layout components**/
import Nav from './components/Nav.jsx';
import Footer from './components/Footer';

/** Pages **/
import Home from "./pages/Home";
import About from "./Pages/About.jsx"
import Flat from "./Pages/Flat.jsx"
import Error from "./Pages/Error.jsx"

const root = document.getElementById("root");
const Layout = () => {
  return (
      <div>
          <Nav/>
          <main>
              <Outlet />
          </main>
          <Footer/>
      </div>
  );
};

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/appartement" element={<Flat/>}/>
        <Route path="*"  element={<Error/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

/*
const layout = () =>{
  return(
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}


</Route>  
*/