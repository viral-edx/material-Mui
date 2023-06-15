/* eslint-disable no-unused-vars */
import { Box } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
import { Speed, TableChart, GridView } from '@mui/icons-material';

const components = [
  {
    id: 'components-dashboard',
    title: 'Dashboard',
    type: 'item',
    icon: Speed,
    url: '/dashboard/default',
    breadcrumbs: false
  },
  {
    id: 'components-matrix',
    title: 'Matrix',
    type: 'item',
    icon: TableChart,
    url: '/matrix-grid',
    breadcrumbs: false
  },
  {
    id: 'components-comp',
    title: 'Components',
    type: 'item',
    icon: GridView,
    url: '/components-button',
    breadcrumbs: false
  }
];

const FixedSideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState('/dashboard/default');
  return (
    <Box className="fixed-side-bar">
      {components.map((key) => {
        const IconComponent = key.icon;
        return (
          <Box
            onClick={() => {
              navigate(key.url);
              setState(key.url);
            }}
            key={key.id}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px', marginTop: '10px' }}
          >
            <div className={key.url === state ? 'icon-fixed-sidebar-upper' : 'icon-fixed-upper'}>
              <IconComponent size={22} />
            </div>
            <span>{key.title}</span>
          </Box>
        );
      })}
    </Box>
  );
};

export default FixedSideBar;
