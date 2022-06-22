import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Link, Card, Grid, CardContent } from '@mui/material';
import { UserMoreMenu } from '../user';
import deleteApi from '../../../services/delete';

// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ rest, index }) {
  // const { cover, title, view, comment, share, author, createdAt } = rest;
  // const { estado, nombre, id_establecimiento } = rest;
  const objEstablecimiento = {
    estado: rest.estado, 
    nombre: rest.nombre,
    id: rest.id_establecimiento
  }

  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;

  const deleteEstabl = async() => {
    await deleteApi(objEstablecimiento.id)
  }

  return (
    <Grid item xs={12} 
    sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}
    >
      <Card sx={{ position: 'relative' }}>
      <UserMoreMenu delete={deleteEstabl}/>
        <CardMediaStyle
          sx={{
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >

          <CoverImgStyle alt={objEstablecimiento.nombre} src={'https://res.cloudinary.com/dxhgejzwc/image/upload/v1648678917/cld-sample.jpg'} />
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 4,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }),
          }}
        >

          <TitleStyle
            to="#"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            component={RouterLink}
            sx={{
              ...(latestPostLarge && { typography: 'h5', height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: 'common.white',
              }),
            }}
          >
            {objEstablecimiento.nombre}
          </TitleStyle>

        </CardContent>
      </Card>
    </Grid>
  );
}
