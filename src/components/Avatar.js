import { AvatarGroup, Badge, Box, CardContent, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import DividerPage from 'utils/Divider';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { styled } from '@mui/material/styles';
import avatar1 from '../assets/images/avatar1.png';
import avatar2 from '../assets/images/avatar2.png';
import avatar3 from '../assets/images/avatar3.png';

const AvatarPage = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""'
      }
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0
      }
    }
  }));

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`
  }));

  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Avatar
        </Typography>
        <Typography variant="h6" className="description">
          Avatars are found throughout material design with uses in everything from tables to dialog menus.
        </Typography>
      </Box>

      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Vector avatars */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Vector avatars
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src={avatar1} />
                    <Avatar alt="Travis Howard" src={avatar2} />
                    <Avatar alt="Cindy Baker" src={avatar3} />
                  </Stack>
                </Grid>
              </CardContent>
            </Paper>

            {/* Letter avatars */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Letter avatars
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Avatar>H</Avatar>
                  <Avatar sx={{ bgcolor: '#fb8c00' }}>N</Avatar>
                  <Avatar sx={{ bgcolor: '#8e24aa' }}>OP</Avatar>
                </Grid>
              </CardContent>
            </Paper>

            {/* Sizes Avatar */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Sizes Avatar
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  {' '}
                  <Avatar alt="Remy Sharp" src={avatar2} sx={{ width: 24, height: 24 }} />
                  <Avatar alt="Remy Sharp" src={avatar2} />
                  <Avatar alt="Remy Sharp" src={avatar2} sx={{ width: 56, height: 56 }} />
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Icon avatars */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Icon avatars
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                  <Avatar sx={{ bgcolor: '#d81b60' }}>
                    <PageviewIcon />
                  </Avatar>
                  <Avatar sx={{ bgcolor: '#43a047' }}>
                    <AssignmentIcon />
                  </Avatar>
                </Grid>
              </CardContent>
            </Paper>

            {/* Interactive */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Interactive
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <AvatarGroup total={24}>
                    <Avatar alt="Remy Sharp" src={avatar1} />
                    <Avatar alt="Travis Howard" src={avatar2} />
                    <Avatar alt="Agnes Walker" src={avatar3} />
                    <Avatar alt="Trevor Henderson" src={avatar1} />
                  </AvatarGroup>
                </Grid>
              </CardContent>
            </Paper>

            {/* Transitions */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Transitions
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Stack direction="row" spacing={2}>
                    <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                      <Avatar alt="Remy Sharp" src={avatar2} />
                    </StyledBadge>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      badgeContent={<SmallAvatar alt="Remy Sharp" src={avatar1} />}
                    >
                      <Avatar alt="Travis Howard" src={avatar2} />
                    </Badge>
                  </Stack>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default AvatarPage;
