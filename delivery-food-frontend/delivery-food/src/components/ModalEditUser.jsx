import { useState } from "react";
import { XIcon, UploadIcon } from "@heroicons/react/solid";
import Modal from "react-modal";
import { updateUserProfile } from "../services/updateUserProfile.js";
import { fileUpload } from "../services/fileUpload.js";

export const ModalEditUser = ({ user, setModalState, modalState }) => {
  const [updateUser, setUpdateUser] = useState({
    displayName: "",
    img: "",
  });
  const [loading, setLoading] = useState({
    loadingImg: false,
    loadingData: false,
  });

  const closeModal = () => {
    setModalState(false);
  };

  const handleChange = ({ target }) => {
    setUpdateUser({
      ...updateUser,
      [target.name]: target.value,
    });
  };

  const handleImg = ({ target }) => {
    setLoading({
      ...loading,
      loadingImg: true,
    });
    const file = target.files[0];
    fileUpload(file).then((data) => {
      setLoading({
        ...loading,
        loadingImg: false,
      });
      setUpdateUser({
        ...updateUser,
        img: data.secure_url,
      });
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // validando si el nombre del usuario es diferente al actual
    const name =
      updateUser.displayName === ""
        ? user && user.displayName
        : updateUser.displayName;

    if (updateUser.img !== "") {
      setLoading({ ...loading, loadingData: true });

      updateUserProfile({ displayName: name, photoURL: updateUser.img })
        .then(() => {
          setLoading({ ...loading, loadingData: false });
          window.location.reload(true);
        })
        .catch((error) => console.error(error));
    } else {
      setLoading({ ...loading, loadingData: true });

      updateUserProfile({ displayName: name })
        .then(() => {
          setLoading({ ...loading, loadingData: false });
          window.location.reload(true);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="">
      <Modal className="h-screen" isOpen={modalState}>
        <div className="z-40 h-screen animate__animated animate__backInDown backdrop-blur-2xl">
          <div className="border-2 w-4/12 mx-auto p-5 mt-10 flex flex-col">
            <XIcon className="w-10 h-10" onClick={closeModal} />
            <form
              action=""
              className="flex flex-col gap-2 mt-5"
              onSubmit={handleSubmit}
            >
              <label htmlFor="name">Cambiar nombre:</label>
              <input
                type="text"
                name="displayName"
                className="edit-user-name rounded-md p-2 border-black border-2 focus:outline-none"
                id="name"
                onChange={handleChange}
                defaultValue={user.displayName}
              />
              <label htmlFor="file">Cambiar imagen:</label>
              <div className="container-edit-user-img relative flex">
                <input
                  type="file"
                  name="file"
                  className="edit-user-img w-full h-12 z-21"
                  id="file"
                  onChange={handleImg}
                />
                <UploadIcon className="edit-user-img-icon bg-black text-white absolute w-full h-12 p-2 rounded-md" />
              </div>
              <button
                disabled={loading.loadingImg ? true : false}
                className="btn-update-user mt-20 border-black border-2 p-2 text-lg"
              >
                Actualizar
              </button>
            </form>
            {(loading.loadingImg && <h1>cargando imagen</h1>) ||
              (loading.loadingData && <h1>cargando datos</h1>)}
          </div>
        </div>
      </Modal>
    </div>
  );
};
