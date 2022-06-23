import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import BoxDate from '../components/BoxDate';
// sections
import { AppNewsUpdate } from '../sections/@dashboard/app';
// services
import { get } from '../services/get';

// ----------------------------------------------------------------------

const styledData = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  width: '100%',
};
export default function DashboardApp() {
  const theme = useTheme();

  const [usersLength, setUsersLength] = useState(0);
  const [establecimientos, setEstablecimientos] = useState(null);

  const getUsers = async () => {
    try {
      const respond = await get('usuarios');
      const data = respond.data.length;
      setUsersLength(data);
    } catch (error) {
      console.log('no trae usuarios');
    }
  };
  const getEstablecimientos = async () => {
    try {
      const respond = await get('establecimientos');
      const data = respond.data;
      setEstablecimientos(data);
    } catch (error) {
      console.log('no trae establecimientos');
    }
  };
  useEffect(() => {
    getUsers();
    getEstablecimientos();
  }, []);

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hola, bienvenido de nuevo
        </Typography>

        <Grid container spacing={3}>
          <div style={styledData}>
            <BoxDate title={'Usuarios registrados'} data={usersLength} />
            <BoxDate title={'Establec. disponibles'} data={establecimientos?.length} />
          </div>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="Nuevos restaurantes"
              list={establecimientos?.map((element, index) => ({
                id: element.id_establecimiento,
                title: element.nombre,
                description: element.estado,
                image: element.foto_est,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
