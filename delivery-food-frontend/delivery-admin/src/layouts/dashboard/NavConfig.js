// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

export const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Usuarios',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Restaurantes',
    path: '/dashboard/restaurants',
    icon: getIcon('dashicons:store'),
  },
];

export default navConfig;
