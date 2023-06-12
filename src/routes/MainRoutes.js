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
import EmailPage from 'matrixPages/email';
import InvoicePage from 'matrixPages/Invoice';
import MeetPage from 'components/meetPage';
import SliderPage from 'components/slider';
import TextFieldPage from 'components/textField';
import BadgePage from 'components/badge';
import DividerPageComp from 'components/dividerComp';
import TooltipPage from 'components/tooltip';
import AlertPage from 'components/alert';
import CardPage from 'components/card';
import PaginationPage from 'components/pagination';
import InvoiceDetailed from 'matrixPages/invoiceDetailed';
import Progress from '../components/progress';
import { Outlet } from 'react-router';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// ==============================|| MAIN ROUTING ||============================== //
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <ButtonPage />
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
      path: '/matrix-grid',
      element: <EmailPage />
    },
    {
      path: '/matrix-invoice',
      element: <Outlet />,
      // element: <InvoicePage />,
      children: [
        { index: true, element: <InvoicePage /> },
        {
          path: `/matrix-invoice/:id`,
          element: <InvoiceDetailed />
        }
      ]
    },
    {
      path: '/meet',
      element: <MeetPage />
    },
    {
      path: '/components-switch',
      element: <SwitchPage />
    },
    {
      path: '/components-slider',
      element: <SliderPage />
    },
    {
      path: '/components-text-field',
      element: <TextFieldPage />
    },
    {
      path: '/components-badge',
      element: <BadgePage />
    },
    {
      path: '/components-divider',
      element: <DividerPageComp />
    },
    {
      path: '/components-tooltip',
      element: <TooltipPage />
    },
    {
      path: '/components-alert',
      element: <AlertPage />
    },
    {
      path: '/components-progress',
      element: <Progress />
    },
    {
      path: '/components-card',
      element: <CardPage />
    },
    {
      path: '/components-pagination',
      element: <PaginationPage />
    }
  ]
};

export default MainRoutes;
