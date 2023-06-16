import { useRoutes } from 'react-router-dom';

// routes
import ComponentLayoutRoutes from './ComponentRoutes';
import GridLayoutRoute from './GridRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([ComponentLayoutRoutes, GridLayoutRoute]);
}
