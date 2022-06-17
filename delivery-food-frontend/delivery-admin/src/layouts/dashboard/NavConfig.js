// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Tablero',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Usuarios',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Productos',
    path: '/dashboard/products',
    icon: getIcon('ion:restaurant-sharp'),
  },
  {
    title: 'Restaurantes',
    path: '/dashboard/restaurants',
    icon: getIcon('dashicons:store'),
  },
];

export default navConfig;
