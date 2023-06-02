import { Box } from '@mui/material';
import React from 'react';
import { IconDashboard, IconMail, IconComponents, IconBrandZoom } from '@tabler/icons';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const components = [
  {
    id: 'components-buttons',
    title: 'Dashboard',
    type: 'item',
    icon: IconDashboard,
    url: '/dashboard/default',
    breadcrumbs: false
  },
  {
    id: 'components-radio',
    title: 'Gmail',
    type: 'item',
    icon: IconMail,
    url: '/email',
    breadcrumbs: false
  },
  {
    id: 'components-checkbox',
    title: 'Components',
    type: 'item',
    icon: IconComponents,
    url: '/components-button',
    breadcrumbs: false
  },
  {
    id: 'components-meet',
    title: 'Meet',
    type: 'item',
    icon: IconBrandZoom,
    url: '/meet',
    breadcrumbs: false
  }
];

const FixedSideBar = () => {
  const navigate = useNavigate();
  const [state, setState] = useState('/dashboard/default');
  return (
    <Box component="nav" className="fixedSideBarNavbar">
      <Box sx={{ display: { xs: 'block' }, fontSize: '10px' }}>
        <Box className="fixedSideBar">
          {components.map((key) => {
            const IconComponent = key.icon;
            return (
              <Box
                className={key.url === state && 'selectedFixedMenu'}
                onClick={() => {
                  navigate(key.url);
                  setState(key.url);
                }}
                key={key.id}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px', marginTop: '10px' }}
              >
                <IconComponent size={24} />
                <span>{key.title}</span>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default FixedSideBar;
