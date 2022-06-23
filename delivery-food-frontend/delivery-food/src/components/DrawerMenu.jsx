import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "rsuite";
import { useAuth } from "../auth/AuthContent";
import { ModalAddUbicacion } from "./ModalAddUbicacion";

export const DrawerMenu = ({ openDrawer, closeDrawer, setOpenDrawer }) => {
  const { user } = useAuth();

  const [handleModal, setHandleModal] = useState(false);

  const openModal = () => {
    setHandleModal(true);
  };

  return (
    <>
      {handleModal && (
        <ModalAddUbicacion
          modalState={handleModal}
          setModalState={setHandleModal}
        />
      )}
      <Drawer
        placement="left"
        backdrop={true}
        open={openDrawer}
        size="xs"
        onClose={() => setOpenDrawer(false)}
        className="rounded-full"
      >
        <Drawer.Body>
          <div className="drawer-menu h-screen border-2 flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-14 text-center">
              {user && (
                <>
                  <Link
                    to={`/usuario/${user.email.split("@")[0]}`}
                    className="hover:no-underline text-white text-lg
            hover:text-[color:var(--dark-blue)] hover:bg-[color:var(--yellow)]
            hover:p-2 hover:rounded-md hover:duration-200 transition-all ease-in-out"
                  >
                    Ver perfil
                  </Link>
                </>
              )}
              <button
                className="hover:no-underline text-white text-lg
            hover:text-[color:var(--dark-blue)] hover:bg-[color:var(--yellow)]
            hover:p-2 hover:rounded-md hover:duration-200 transition-all ease-in-out"
                onClick={openModal}
              >
                Añadir ubicación
              </button>
              <Link
                to="/viewProducts/pedido"
                className="hover:no-underline text-white text-lg
            hover:text-[color:var(--dark-blue)] hover:bg-[color:var(--yellow)]
            hover:p-2 hover:rounded-md hover:duration-200 transition-all ease-in-out"
              >
                Ver carrito
              </Link>
              <Link
                to="/viewProducts/restaurants"
                className="hover:no-underline text-white text-lg
            hover:text-[color:var(--dark-blue)] hover:bg-[color:var(--yellow)]
            hover:p-2 hover:rounded-md hover:duration-200 transition-all ease-in-out"
                onClick={() => setOpenDrawer(false)}
              >
                Ver restaurantes
              </Link>
            </ul>
          </div>
        </Drawer.Body>
      </Drawer>
    </>
  );
};
