import { Box } from '@mui/material';
import React from 'react';
import { IconDashboard, IconLogout, IconSettings, IconUser, IconMenu2 } from '@tabler/icons';

const icons = {
  IconDashboard,
  IconLogout,
  IconSettings,
  IconUser,
  IconMenu2
};

const FixedSideBar = () => {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        width: '70px',
        top: '83px',
        position: 'absolute',
        zIndex: '100',
        height: '100%',
        backgroundColor: 'rgb(238,242,246)'
      }}
    >
      <Box sx={{ display: { xs: 'block' }, fontSize: '10px' }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto', flexDirection: 'column', cursor: 'pointer' }}>
          {Object.keys(icons).map((key) => {
            const IconComponent = icons[key];
            return (
              <Box
                key={key}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px', marginTop: '10px' }}
              >
                <IconComponent size={24} />
                <span>{key}</span>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default FixedSideBar;
