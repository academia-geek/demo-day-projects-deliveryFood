import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import post from '../services/post';

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

export default function ModalRestaurant({modalForm, setModalForm, title}) {
  const [formModal, setFormModal] = useState({name: '', direction: ''});

  const formModalFn = async(e) => {
    e.preventDefault();
    try{
      const objNewRestaurant = {
        estado: 'ACTIVO',
        nombre: formModal.name,
        operacional: 'S',
        id_menu: '62b0f96804f7eb4510e9dfa2'
      }
      await post('establecimientos', objNewRestaurant);
      console.log('entra');
    } catch (error) {
      console.log('no entra');
    }
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
            <TextField label="Nombre" variant="standard" onChange={(e)=>setFormModal({...formModal, name: e.target.value})}/>
            <TextField label="Direccion" variant="standard" onChange={(e)=>setFormModal({...formModal, direction: e.target.value})}/>
            <br />
            <Button type='submit' variant="contained">Aceptar</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
