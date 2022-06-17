import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Modal } from "rsuite";

const ModalUbicacion = ({ modalState, setModalState }) => {
  const closeModal = () => {
    setModalState(false);
  };

  return (
    <Modal backdrop={true} open={modalState} onClose={closeModal}>
      <Modal.Header>
        <p className="text-xl">Añade tu ubicación</p>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          placeholder="añadir ubicacion"
          className="border-2 border-black w-full p-2 rounded-md focus:outline-none"
        />
        <button
          className="bg-[color:var(--dark-blue)] p-3 text-white mt-5 rounded-md
         hover:bg-slate-800"
        >
          Añadir
        </button>
      </Modal.Body>
    </Modal>
  );
};

export const DrawerMenu = ({ openDrawer, setOpenDrawer }) => {
  const [handleModal, setHandleModal] = useState(false);

  const openModal = () => {
    setHandleModal(true);
  };

  return (
    <>
      {handleModal && (
        <ModalUbicacion
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
              <button
                className="hover:no-underline text-white text-lg
            hover:text-[color:var(--dark-blue)] hover:bg-[color:var(--yellow)]
            hover:p-2 hover:rounded-md hover:duration-200 transition-all ease-in-out"
                onClick={openModal}
              >
                Añadir ubicación
              </button>
              <Link
                to="/"
                className="hover:no-underline text-white text-lg
            hover:text-[color:var(--dark-blue)] hover:bg-[color:var(--yellow)]
            hover:p-2 hover:rounded-md hover:duration-200 transition-all ease-in-out"
              >
                Ver pedidos
              </Link>
              <Link
                to="/"
                className="hover:no-underline text-white text-lg
            hover:text-[color:var(--dark-blue)] hover:bg-[color:var(--yellow)]
            hover:p-2 hover:rounded-md hover:duration-200 transition-all ease-in-out"
              >
                Ver restaurantes
              </Link>
              <Link
                to="/"
                className="hover:no-underline text-white text-lg
            hover:text-[color:var(--dark-blue)] hover:bg-[color:var(--yellow)]
            hover:p-2 hover:rounded-md hover:duration-200 transition-all ease-in-out"
              >
                Ver cafetirias
              </Link>
            </ul>
          </div>
        </Drawer.Body>
      </Drawer>
    </>
  );
};
