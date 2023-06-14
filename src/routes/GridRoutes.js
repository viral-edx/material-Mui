// project imports

import MainLayout from 'layout/MainLayout';
import EmailPage from 'matrixPages/Email';
import InvoicePage from 'matrixPages/Invoice';
import InvoiceDetailed from 'matrixPages/InvoiceDetailed';
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
