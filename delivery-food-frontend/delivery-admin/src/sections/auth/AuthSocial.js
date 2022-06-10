// material
import { Stack, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// component
import Iconify from '../../components/Iconify';
// context 
import { useAuth } from './AuthPeticiones';

// ----------------------------------------------------------------------

export default function AuthSocial({methodApi}) {

  const navigate = useNavigate();

  const { loginWithGoogle, loginWithFacebook } = useAuth();

  const loginFacebook = async() => {
    try {
      const { user } = await loginWithFacebook();
      const objUser = {
        // documento: 123456789,
        nombre: user.displayName,
        apellido: 'editar',
        telefono: 3205449452,
        tipo: 'Administrador',
        email: user.email
      };
      if(methodApi){
        await methodApi(objUser)
      }
      navigate('/dashboard/app')
    } catch (error) {
      console.log(error);
    }
  }
  const loginGoogle = async() => {
    try {
      const { user } = await loginWithGoogle();
      // logica para separar nombres de apellidos
      // if(user.displayName.split(' ').length === 3) {
      //   const firstName = '';
        // for(let i= 0; i < user.displayName.indexOf(' '); i+1) {
        //   firstName.concat(i)
        // }
        // console.log(firstName);
      // };

      if(methodApi){
        const objUser = {
          // documento: 123456789,
          nombre: user.displayName,
          apellido: 'editar',
          telefono: 3205449452,
          tipo: 'Administrador',
          email: user.email
        };
        await methodApi(objUser)
      }
      navigate('/dashboard/app');
    } catch (error) {
      console.log(error);
    };
  }
  
  return (
    <>
      <Stack direction="row" spacing={2} sx={{marginBottom: '40px'}}>
        <Button onClick={loginGoogle} fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
        </Button>

        <Button onClick={loginFacebook} fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
        </Button>
      </Stack>
    </>
  );
}
