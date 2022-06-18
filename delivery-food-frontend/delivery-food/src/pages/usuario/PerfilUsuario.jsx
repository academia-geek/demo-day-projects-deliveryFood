import { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContent";
import { SideBar } from "../../components/SideBar";
import { CloudUploadIcon, CheckIcon } from "@heroicons/react/solid";
import { updateImageUser } from "../../services/storageAuth";
import { ModalEditUser } from "../../components/ModalEditUser";
import Swal from "sweetalert2";

import "../../styles/perfilUsuario.css";

const PerfilUsuario = () => {
  const [modalState, setModalState] = useState(false);

  const {
    user,
    addImageAfterUserIsRegistered,
    sendEmailVerificationAfterUserIsRegistered,
  } = useAuth();

  const showModal = () => {
    setModalState(true);
  };

  useEffect(() => {
    document.title = `${user.displayName} | Delivery Food`;
  }, [user]);

  const handleImage = async ({ target }) => {
    const file = target.files[0];
    try {
      const image = await updateImageUser(file);
      await addImageAfterUserIsRegistered(user, image);
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user.urlImage);

  const handleEmailVerification = async () => {
    try {
      await sendEmailVerificationAfterUserIsRegistered();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se ha enviado un correo de verificación a tu correo",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <SideBar username={user.email.split("@")[0]} modalState={modalState} />
      <div
        className="container-user-profile w-10/12 flex flex-col items-center p-10 bg-slate-100 h-screen
       relative overflow-y-scroll"
      >
        {!user.emailVerified && (
          <h1 className="w-full absolute text-center bg-yellow text-xl pb-2 top-0">
            Si ya verificaste tu cuenta recarga la pagina
          </h1>
        )}
        <div className="flex flex-col items-center">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="img-user-profile w-52 h-52 mt-5"
              style={{ borderRadius: "50%" }}
            />
          )}
          <h1 className="text-2xl mt-2">{user.displayName}</h1>
          <div className="w-full flex justify-evenly mt-10 ">
            {!user.emailVerified && (
              <div className="flex flex-col justify-center items-center p-5 rounded-md">
                <h2 className="">No has verificado tu correo</h2>
                <div>
                  <button
                    className="btn-verify-account self-start flex items-center gap-2"
                    onClick={handleEmailVerification}
                  >
                    <CheckIcon className="h-7 w-7" />
                  </button>
                </div>
              </div>
            )}
            {!user.photoURL && (
              <div className="flex flex-col justify-center items-center  p-5 rounded-md gap-2">
                <h2 className="">No has subido una foto de perfil</h2>
                <div className="relative flex justify-center">
                  <input
                    type="file"
                    className="btn-upload-img-user-profile self-start flex 
                items-center gap-2"
                    onChange={handleImage}
                  />
                  <CloudUploadIcon
                    className="btn-upload-img-user-profile-icon h-16 p-3 w-16
                 top-0 left-50 absolute"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {user.photoURL && user.emailVerified && (
          <div
            className="container-btns-ubication-edit-profile-user w-full flex 
          justify-around mt-5"
          >
            <button>Añadir ubicacion</button>
            <button onClick={showModal}>Editar Perfil</button>
          </div>
        )}
        {modalState ? (
          <ModalEditUser
            user={user}
            modalState={modalState}
            setModalState={setModalState}
          />
        ) : null}
      </div>
    </div>
  );
};

export default PerfilUsuario;
