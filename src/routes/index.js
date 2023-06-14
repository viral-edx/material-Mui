import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './ComponentRoutes';
import GridLayoutRoute from './GridRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, GridLayoutRoute]);
}
