import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { HeaderMenu } from "../components/HeaderMenu";
import Menu from "./Menu";
import MenuEstablecimiento from "./MenuEstablecimiento";
import Pedido from "./Pedido";
import ProductDetail from "./ProductDetail";
import Restaurants from "./Restaurants";

export default function ViewProducts() {
  return (
    <>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/menu/:idMenu" element={<MenuEstablecimiento />} />
        <Route path="/detail-product/:idProduct" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
