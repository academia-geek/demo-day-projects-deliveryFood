import { CarrouselMenu } from "../components/CarrouselMenu";
import { HeaderMenu } from "../components/HeaderMenu";
import { MenuList } from "../components/MenuList";
import { Footer } from "../components/Footer";

import "../styles/headerMenu.css";

const Menu = () => {
  return (
    <div className="menu-view">
      <HeaderMenu />
      <CarrouselMenu />
      <main className="main-menu mt-10" id="main-menu">
        <h1 className="text-center text-3xl font-semibold">
          Lista de productos disponibles
        </h1>
        <MenuList />
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
