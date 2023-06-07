import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const ButtonPage = Loadable(lazy(() => import('components/button')));
const RadioPage = Loadable(lazy(() => import('components/radio')));
const MenuPage = Loadable(lazy(() => import('components/menu')));
const CheckboxPage = Loadable(lazy(() => import('components/checkbox')));
const SelectPage = Loadable(lazy(() => import('components/select')));
const SwitchPage = Loadable(lazy(() => import('components/switch')));
const RatingPage = Loadable(lazy(() => import('components/rating')));
const EmailPage = Loadable(lazy(() => import('components/email')));
const MeetPage = Loadable(lazy(() => import('components/meetPage')));
const AlertPage = Loadable(lazy(() => import('components/alert')));
const SliderPage = Loadable(lazy(() => import('components/slider')));
const BadgePage = Loadable(lazy(() => import('components/badge')));
const CardPage = Loadable(lazy(() => import('components/card')));
const DividerPageComp = Loadable(lazy(() => import('components/dividerComp')));
const PaginationPage = Loadable(lazy(() => import('components/pagination')));
const ProgressPage = Loadable(lazy(() => import('components/progress')));
const TextFieldPage = Loadable(lazy(() => import('components/textField')));
const TooltipPage = Loadable(lazy(() => import('components/tooltip')));

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
      path: '/email',
      element: <EmailPage />
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
      element: <ProgressPage />
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
