import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'uiComponent/Loadable';
import ButtonPage from 'components/Button';
import RadioPage from 'components/Radio';
import MenuPage from 'components/Menu';
import CheckboxPage from 'components/Checkbox';
import SelectPage from 'components/Select';
import SwitchPage from 'components/Switch';
import RatingPage from 'components/Rating';
import SliderPage from 'components/Slider';
import TextFieldPage from 'components/TextField';
import BadgePage from 'components/Badge';
import DividerPageComp from 'components/DividerComp';
import TooltipPage from 'components/Tooltip';
import AlertPage from 'components/Alert';
import CardPage from 'components/Card';
import PaginationPage from 'components/Pagination';
import Progress from 'components/Progress';
import AutoCompletePage from 'components/AutoComplete';
import ChipPage from 'components/Chip';
import AvtarPage from 'components/Avatar';
import DialogPage from 'components/Dialog';
import SnackbarPage from 'components/Snackbar';
import BreadcrumbsPage from 'components/Breadcrumbs';
import ListsPage from 'components/Lists';
import TypographyPage from 'components/Typography';
import AccordionPage from 'components/Accordion';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// ==============================|| MAIN ROUTING ||============================== //
const ComponentLayoutRoute = {
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
    },
    {
      path: '/components-auto-complete',
      element: <AutoCompletePage />
    },
    {
      path: '/components-chips',
      element: <ChipPage />
    },
    {
      path: '/components-avatar',
      element: <AvtarPage />
    },
    {
      path: '/components-dialog',
      element: <DialogPage />
    },
    {
      path: '/components-snackbar',
      element: <SnackbarPage />
    },
    {
      path: '/components-breadcrumbs',
      element: <BreadcrumbsPage />
    },
    {
      path: '/components-lists',
      element: <ListsPage />
    },
    {
      path: '/components-typography',
      element: <TypographyPage />
    },
    {
      path: '/components-accordion',
      element: <AccordionPage />
    }
  ]
};

export default ComponentLayoutRoute;
