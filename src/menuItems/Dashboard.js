// assets
import { Speed } from '@mui/icons-material';

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: Speed,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
