import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment, Divider, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import {postApi} from '../../../helpers/api';
import Iconify from '../../../components/Iconify';
import { useAuth } from '../AuthPeticiones';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const { createUser, addUsernameWhenUserIsRegistered } = useAuth();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    number: Yup.string(),
    password: Yup.string().required('Password is required'),
  });

  const createUserWithEmailAndPassword = async (name, email, password) => {
    try {
      createUser(email, password).then(({ user }) => {
        addUsernameWhenUserIsRegistered(user, name);
        window.location.href = `/dashboard/app`;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      number: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async(value) => {
      const objUser = {
        nombre: value.firstName,
        apellido: value.lastName,
        email: value.email,
        number: value.number,
        password: value.password,
      }
      console.log(objUser);
      try {
        const user = createUser(value.email, value.password);
        addUsernameWhenUserIsRegistered(user, `${value.firstName} ${value.lastName}`);
        postApi('post', 'usuarios', objUser)
        navigate(`/dashboard/app`);
      } catch (error) {
      console.log(error);
      }
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <div>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            {/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}> */}
              <TextField
                fullWidth
                label="Nombre Completo"
                {...getFieldProps('name')}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
                />

              {/* <TextField
                fullWidth
                label="Apellidos"
                {...getFieldProps('lastName')}
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                /> */}
            {/* </Stack> */}

            <TextField
              fullWidth
              type="email"
              label="Email"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              />

            <TextField
              fullWidth
              type="number"
              label="N??mero de tel??fono"
              {...getFieldProps('number')}
              error={Boolean(touched.number && errors.number)}
              helperText={touched.number && errors.number}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              label="Contrase??a"
              {...getFieldProps('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              />

            <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
              Registrarse
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          O puedes ingresar con
        </Typography>
      </Divider>
    </div>
  );
}
