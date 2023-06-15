// project imports

import MainLayout from 'layout/MainLayout';
import EmailPage from 'matrixPage/GridPage';
import InvoicePage from 'matrixPage/InvoicePage';
import InvoiceDetailed from 'matrixPage/InvoicePage/InvoiceDetails';
import { Outlet } from 'react-router';

// dashboard routing

// ==============================|| MAIN ROUTING ||============================== //
const GridLayoutRoute = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/matrix-grid',
      element: <EmailPage />
    },
    {
      path: '/matrix-invoice',
      element: <Outlet />,
      children: [
        { index: true, element: <InvoicePage /> },
        {
          path: `/matrix-invoice/:id`,
          element: <InvoiceDetailed />
        }
      ]
    }
  ]
};

export default GridLayoutRoute;
