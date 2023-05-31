/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Box } from '@mui/material';
import React from 'react';
import { IconDashboard, IconMail, IconComponents, IconBrandZoom } from '@tabler/icons';
import { useNavigate } from 'react-router';

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
    id: 'components-menu',
    title: 'Meet',
    type: 'item',
    icon: IconBrandZoom,
    url: '/components-menu',
    breadcrumbs: false
  }
];

const FixedSideBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        width: '70px',
        top: '45px',
        position: 'absolute',
        zIndex: '100',
        height: '100%',
        backgroundColor: 'rgb(238,242,246)'
      }}
    >
      <Box sx={{ display: { xs: 'block' }, fontSize: '10px' }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto', flexDirection: 'column', cursor: 'pointer' }}>
          {components.map((key) => {
            console.log('key', key);
            const IconComponent = key.icon;
            return (
              <Box
                onClick={() => navigate(key.url)}
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
