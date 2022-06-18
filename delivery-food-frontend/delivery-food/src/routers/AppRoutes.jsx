import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PerfilUsuario from "../pages/usuario/PerfilUsuario";
import PublicRoutes from "../components/PublicRoutes";
import PrivateRoutes from "../components/PrivateRoutes";

import { AuthProvider } from "../auth/AuthContent";
import Restaurants from "../pages/Restaurants";
import ViewProducts from "../pages/ViewProducts";

// cart Context
import { CartProvider } from "../context/CartContext";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/usuario/:username"
              element={
                <PrivateRoutes>
                  <PerfilUsuario />
                </PrivateRoutes>
              }
            />
            <Route
              path="/"
              element={
                <PublicRoutes>
                  <Home />
                </PublicRoutes>
              }
            />
            <Route path="/viewProducts/*" element={<ViewProducts />} />
            <Route
              path="/login"
              element={
                <PublicRoutes>
                  <Login />
                </PublicRoutes>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoutes>
                  <Register />
                </PublicRoutes>
              }
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
