import { Backdrop, Box, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import DividerPage from 'utils/Divider';
import EditIcon from '@mui/icons-material/Edit';
const SpeedDialPage = () => {
  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' }
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {' '}
      <Box>
        <Typography variant="h2" className="title">
          Speed Dial
        </Typography>
        <Typography variant="h6" className="description">
          When pressed, a floating action button can display three to six related actions in the form of a speed dial.
        </Typography>
      </Box>
      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Basic SpeedDial
              </Typography>
              <DividerPage />
              <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                  ariaLabel="SpeedDial basic example"
                  sx={{ position: 'absolute', bottom: 16, right: 16 }}
                  icon={<SpeedDialIcon />}
                >
                  {actions.map((action) => (
                    <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
                  ))}
                </SpeedDial>
              </Box>
            </Paper>
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Persistent action SpeedDial
              </Typography>
              <DividerPage />
              <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <Backdrop open={open} />
                <SpeedDial
                  ariaLabel="SpeedDial tooltip example"
                  sx={{ position: 'absolute', bottom: 16, right: 16 }}
                  icon={<SpeedDialIcon />}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  open={open}
                >
                  {actions.map((action) => (
                    <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} tooltipOpen onClick={handleClose} />
                  ))}
                </SpeedDial>
              </Box>
            </Paper>
          </Stack>

          {/* First Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Custom close iconSpeedDial
              </Typography>
              <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                  ariaLabel="SpeedDial openIcon example"
                  sx={{ position: 'absolute', bottom: 16, right: 16 }}
                  icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                >
                  {actions.map((action) => (
                    <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
                  ))}
                </SpeedDial>
              </Box>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </div>
  );
};

export default SpeedDialPage;
