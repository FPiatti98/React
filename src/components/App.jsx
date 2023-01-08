import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Navbar';
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Error404 from "./Error404";
import CartContextProvider from "./context/CartContext";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Footer from "./Footer";
import EndOfPurchase from "./EndOfPurchase";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/endofpurchase/:id"} element={<EndOfPurchase />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
