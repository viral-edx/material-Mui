/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Slide,
  Stack,
  Switch,
  TextField,
  Typography
} from '@mui/material';
import DividerPage from 'utils/Divider';
import { Add, Person } from '@mui/icons-material';

const emails = ['username@gmail.com', 'username02@gmail.com'];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters>
            <ListItemButton onClick={() => handleListItemClick(email)} key={email}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#bbdefb', color: '#1e88e5' }}>
                  <Person />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={() => handleListItemClick('addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <Add />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

const DialogPage = () => {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openTransition, setOpenTransition] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);
  const [openWidth, setOpenWidth] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleClickOpenTransition = () => {
    setOpenTransition(true);
  };

  const handleCloseTransition = () => {
    setOpenTransition(false);
  };

  const handleClickOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleClickOpenWidth = () => {
    setOpenWidth(true);
  };

  const handleCloseWidth = () => {
    setOpenWidth(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Dialog
        </Typography>
        <Typography variant="h6" className="description">
          Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
        </Typography>
      </Box>

      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic Dialog */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Basic Dialog
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Typography variant="subtitle1" component="div">
                    Selected: {selectedValue}
                  </Typography>
                  <br />
                  <Button variant="outlined" onClick={handleClickOpen}>
                    Open simple dialog
                  </Button>
                  <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
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
                  <Button variant="outlined" onClick={handleClickOpenTransition}>
                    Slide in alert dialog
                  </Button>
                  <Dialog
                    open={openTransition}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseTransition}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are
                        running.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseTransition}>Disagree</Button>
                      <Button onClick={handleCloseTransition}>Agree</Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </CardContent>
            </Paper>

            {/* Optional Sizes */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Optional Sizes
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Button variant="outlined" onClick={handleClickOpenWidth}>
                    Open max-width dialog
                  </Button>
                  <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={openWidth} onClose={handleCloseWidth}>
                    <DialogTitle>Optional sizes</DialogTitle>
                    <DialogContent>
                      <DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
                      <Box
                        noValidate
                        component="form"
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          m: 'auto',
                          width: 'fit-content'
                        }}
                      >
                        <FormControl sx={{ mt: 2, minWidth: 120 }}>
                          <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                          <Select
                            autoFocus
                            value={maxWidth}
                            onChange={handleMaxWidthChange}
                            label="maxWidth"
                            inputProps={{
                              name: 'max-width',
                              id: 'max-width'
                            }}
                          >
                            <MenuItem value={false}>false</MenuItem>
                            <MenuItem value="xs">xs</MenuItem>
                            <MenuItem value="sm">sm</MenuItem>
                            <MenuItem value="md">md</MenuItem>
                            <MenuItem value="lg">lg</MenuItem>
                            <MenuItem value="xl">xl</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControlLabel
                          sx={{ mt: 1 }}
                          control={<Switch checked={fullWidth} onChange={handleFullWidthChange} />}
                          label="Full width"
                        />
                      </Box>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseWidth}>Close</Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Alerts */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Alerts
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Button variant="outlined" onClick={handleClickOpenAlert}>
                    Open alert dialog
                  </Button>
                  <Dialog
                    open={openAlert}
                    onClose={handleCloseAlert}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are
                        running.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseAlert}>Disagree</Button>
                      <Button onClick={handleCloseAlert} autoFocus>
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </CardContent>
            </Paper>

            {/* Form Dialogs */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Form Dialogs
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Button variant="outlined" onClick={handleClickOpenForm}>
                    Open form dialog
                  </Button>
                  <Dialog open={openForm} onClose={handleCloseForm}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates occasionally.
                      </DialogContentText>
                      <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseForm}>Cancel</Button>
                      <Button onClick={handleCloseForm}>Subscribe</Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default DialogPage;
