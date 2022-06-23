import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import post from '../services/post';
import { uploadImage } from '../services/uploadImgRestaurant';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalRestaurant({ modalForm, setModalForm, title }) {
  const [formModal, setFormModal] = useState({ name: '', img: '' });

  const formModalFn = async (e) => {
    e.preventDefault();
    try {
      const objNewRestaurant = {
        estado: 'ACTIVO',
        nombre: formModal.name,
        operacional: 'S',
        foto_est: formModal.img,
        id_menu: '62b40fa8e1797bec0a552f52',
      };
      await post('establecimientos', objNewRestaurant)
        .then(() => {
          window.location.reload(true);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log('no entra');
    }
  };

  const handleFile = ({ target }) => {
    const file = target.files[0];
    uploadImage(file)
      .then((image) => setFormModal({ ...formModal, img: image }))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Modal
        open={modalForm}
        onClose={() => setModalForm(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="" onSubmit={formModalFn}>
            <TextField
              label="Nombre"
              variant="standard"
              onChange={(e) => setFormModal({ ...formModal, name: e.target.value })}
            />
            <input type="file" onChange={handleFile} />
            <br />
            <Button type="submit" variant="contained">
              Aceptar
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
