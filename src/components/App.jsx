import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Navbar';
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Error404 from "./Error404";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
