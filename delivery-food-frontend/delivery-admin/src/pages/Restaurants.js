import { useEffect, useState  } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/restaurants';
// mock
import POSTS from '../_mock/restaurants';
import { get } from '../services/get';
import ModalRestaurant from '../components/ModalRestaurant';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function Restaurants() {

  const [ establecimientos, setEstablecimientos ] = useState(null); 
  const [ modalForm, setModalForm ] = useState(false);

  const getApi = async() => {
    const responds = await get('establecimientos');
    const data = responds.data;
    setEstablecimientos(data);
  };
  useEffect(()=> {
    getApi()
  }, []);

  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Restaurantes
          </Typography>
          <Button onClick={()=> setModalForm(true)} variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Añadir Restaurante
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {establecimientos?.map((rest, index) => (
            <BlogPostCard key={rest.id_establecimiento} rest={rest} index={index} getApi={getApi} />
          ))}
        </Grid>
      </Container>
      <ModalRestaurant setModalForm={setModalForm} modalForm={modalForm}/>
    </Page>
  );
}
