import { useEffect } from "react";
import { useAuth } from "../../auth/AuthContent";
import { SideBar } from "../../components/SideBar";
import { CloudUploadIcon, CheckIcon } from "@heroicons/react/solid";
import { fileUpload } from "../../services/fileUpload";
import Swal from "sweetalert2";

import "../../styles/perfilUsuario.css";

const PerfilUsuario = () => {
  const {
    user,
    addImageAfterUserIsRegistered,
    sendEmailVerificationAfterUserIsRegistered,
  } = useAuth();

  useEffect(() => {
    document.title = `Delivery Food | ${user.displayName}`;
  }, [user]);

  const handleImage = async ({ target }) => {
    const file = target.files[0];
    try {
      const { secure_url } = await fileUpload(file);
      await addImageAfterUserIsRegistered(user, secure_url);
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

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
      <SideBar username={user.email.split("@")[0]} />
      <div className="w-10/12 flex flex-col items-center pt-10">
        <h1 className="text-2xl">Bienvenid@ {user.displayName}</h1>
        <img
          src={user.photoURL}
          alt={user.displayName}
          className=" w-44 mt-5"
          style={{ borderRadius: "50%" }}
        />
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
              <div className="relative">
                <input
                  type="file"
                  className="btn-upload-img-user-profile self-start flex 
                items-center gap-2 w-14"
                  onChange={handleImage}
                />
                <CloudUploadIcon
                  className="btn-upload-img-user-profile-icon h-16 p-3 w-16
                 absolute top-0 left-0"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
