import { Close } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  CardContent,
  Grid,
  IconButton,
  Paper,
  Slide,
  Snackbar,
  SnackbarContent,
  Stack,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import DividerPage from 'utils/Divider';

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const SnackbarPage = () => {
  const [open, setOpen] = useState(false);
  const [openCustomized, setOpenCustomized] = useState(false);
  const [openTransition, setOpenTransition] = useState(false);
  const [state, setState] = useState({
    openPosition: false,
    vertical: 'top',
    horizontal: 'center'
  });
  const [transition, setTransition] = React.useState(undefined);

  const { vertical, horizontal, openPosition } = state;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClickCustomized = () => {
    setOpenCustomized(true);
  };

  const handleClickPosition = (newState) => () => {
    setState({ openPosition: true, ...newState });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCloseCustomized = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClosePosition = () => {
    setState({ ...state, openPosition: false });
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  const buttons = (
    <>
      <Button
        onClick={handleClickPosition({
          vertical: 'top',
          horizontal: 'center'
        })}
      >
        Top-Center
      </Button>
      <Button
        onClick={handleClickPosition({
          vertical: 'top',
          horizontal: 'right'
        })}
      >
        Top-Right
      </Button>
      <Button
        onClick={handleClickPosition({
          vertical: 'bottom',
          horizontal: 'right'
        })}
      >
        Bottom-Right
      </Button>
      <Button
        onClick={handleClickPosition({
          vertical: 'bottom',
          horizontal: 'center'
        })}
      >
        Bottom-Center
      </Button>
      <Button
        onClick={handleClickPosition({
          vertical: 'bottom',
          horizontal: 'left'
        })}
      >
        Bottom-Left
      </Button>
      <Button
        onClick={handleClickPosition({
          vertical: 'top',
          horizontal: 'left'
        })}
      >
        Top-Left
      </Button>
    </>
  );

  const actionLength = (
    <Button color="secondary" size="small">
      lorem ipsum dolorem
    </Button>
  );

  const handleClickTransition = (Transition) => () => {
    setTransition(() => Transition);
    setOpenTransition(true);
  };

  const handleCloseTransition = () => {
    setOpenTransition(false);
  };

  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Tooltip
        </Typography>
        <Typography variant="h6" className="description">
          Tooltips display informative text when users hover over, focus on, or tap an element.
        </Typography>
      </Box>

      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Simple Snackbars */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Simple Snackbars
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Button onClick={handleClick}>Open simple snackbar</Button>
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="Note archived" action={action} />
                </Grid>
              </CardContent>
            </Paper>

            {/* Customization */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Customization
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Button variant="outlined" onClick={handleClickCustomized}>
                    Open success snackbar
                  </Button>
                  <Snackbar open={openCustomized} autoHideDuration={6000} onClose={handleCloseCustomized}>
                    <Alert onClose={handleCloseCustomized} severity="success" sx={{ width: '100%' }}>
                      This is a success message!
                    </Alert>
                  </Snackbar>
                  <Alert severity="error">This is an error message!</Alert>
                  <Alert severity="warning">This is a warning message!</Alert>
                  <Alert severity="info">This is an information message!</Alert>
                  <Alert severity="success">This is a success message!</Alert>
                </Grid>
              </CardContent>
            </Paper>

            {/* Positioned Snackbars*/}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Positioned Snackbars
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <div>
                    {buttons}
                    <Snackbar
                      anchorOrigin={{ vertical, horizontal }}
                      open={openPosition}
                      onClose={handleClosePosition}
                      message="I love snacks"
                      key={vertical + horizontal}
                    />
                  </div>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Message Length */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Message Length
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Stack spacing={2} sx={{ maxWidth: 600 }}>
                    <SnackbarContent message="I love snacks." action={actionLength} />
                    <SnackbarContent
                      message={
                        'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
                      }
                    />
                    <SnackbarContent message="I love candy. I love cookies. I love cupcakes." action={action} />
                    <SnackbarContent
                      message={
                        'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
                      }
                      action={action}
                    />
                  </Stack>
                </Grid>
              </CardContent>
            </Paper>

            {/* Control Slide Direction */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Control Slide Direction
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Button onClick={handleClickTransition(TransitionLeft)}>Right</Button>
                  <Button onClick={handleClickTransition(TransitionUp)}>Up</Button>
                  <Button onClick={handleClickTransition(TransitionRight)}>Left</Button>
                  <Button onClick={handleClickTransition(TransitionDown)}>Down</Button>
                  <Snackbar
                    open={openTransition}
                    onClose={handleCloseTransition}
                    TransitionComponent={transition}
                    message="I love snacks"
                    key={transition ? transition.name : ''}
                  />
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default SnackbarPage;
