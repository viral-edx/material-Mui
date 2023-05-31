import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ButtonPage from 'components/button';
import RadioPage from 'components/radio';
import MenuPage from 'components/menu';
import CheckboxPage from 'components/checkbox';
import SelectPage from 'components/select';
import SwitchPage from 'components/switch';
import RatingPage from 'components/rating';
import EmailPage from 'components/email';
import MeetPage from 'components/meetPage';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },

    {
      path: '/components-button',
      element: <ButtonPage />
    },
    {
      path: '/components-radio',
      element: <RadioPage />
    },
    {
      path: '/components-menu',
      element: <MenuPage />
    },
    {
      path: '/components-checkbox',
      element: <CheckboxPage />
    },
    {
      path: '/components-select',
      element: <SelectPage />
    },
    {
      path: '/components-switch',
      element: <SwitchPage />
    },
    {
      path: '/components-rating',
      element: <RatingPage />
    },
    {
      path: '/email',
      element: <EmailPage />
    },
    {
      path: '/meet',
      element: <MeetPage />
    }
  ]
};

export default MainRoutes;
