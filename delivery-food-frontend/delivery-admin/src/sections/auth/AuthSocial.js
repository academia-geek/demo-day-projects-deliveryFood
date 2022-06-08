// material
import { Stack, Button, Divider, Typography } from '@mui/material';
// component
import Iconify from '../../components/Iconify';
import { useAuth } from './AuthPeticiones';

// ----------------------------------------------------------------------

export default function AuthSocial() {

  const { loginWithGoogle, loginWithFacebook } = useAuth();

  const loginGoogle = async () => {
    try {
      const { user } = await loginWithGoogle();
      window.location.href = `/dashboard/app/`;
    } catch (error) {
      console.log(error);
    }
  };
  const loginFacebook = async () => {
    try {
      const { user } = await loginWithFacebook();
      window.location.href = `/dashboard/app/`;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Stack direction="row" spacing={2}>

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
