import React, { useState } from 'react';
import {
  Typography,
  Box,
  Grid,
  Stack,
  Paper,
  CardContent,
  Tooltip,
  IconButton,
  Button,
  ClickAwayListener,
  tooltipClasses,
  Fade,
  Zoom
} from '@mui/material';
import DividerPage from 'utils/Divider';
import { Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const TooltipPage = () => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const CustomWidthTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 500
    }
  });

  const NoMaxWidthTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 'none'
    }
  });

  const longText = `
  Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
  Praesent non nunc mollis, fermentum neque at, semper arcu.
  Nullam eget est sed sem iaculis gravida eget vitae justo.
  `;
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
            {/* Simple Tooltips */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Simple Tooltips
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Tooltip title="Delete">
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </CardContent>
            </Paper>

            {/* Positioned Tooltips */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Positioned Tooltips
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Grid container justifyContent="center">
                    <Grid item>
                      <Tooltip title="Add" placement="top-start" color="success">
                        <Button>top-start</Button>
                      </Tooltip>
                      <Tooltip title="Add" placement="top" color="success">
                        <Button>top</Button>
                      </Tooltip>
                      <Tooltip title="Add" placement="top-end" color="success">
                        <Button>top-end</Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="center">
                    <Grid item xs={6}>
                      <Tooltip title="Add" placement="left-start" color="success">
                        <Button>left-start</Button>
                      </Tooltip>
                      <br />
                      <Tooltip title="Add" placement="left" color="success">
                        <Button>left</Button>
                      </Tooltip>
                      <br />
                      <Tooltip title="Add" placement="left-end" color="success">
                        <Button>left-end</Button>
                      </Tooltip>
                    </Grid>
                    <Grid item container xs={6} alignItems="flex-end" direction="column">
                      <Grid item>
                        <Tooltip title="Add" placement="right-start" color="success">
                          <Button>right-start</Button>
                        </Tooltip>
                      </Grid>
                      <Grid item>
                        <Tooltip title="Add" placement="right" color="success">
                          <Button>right</Button>
                        </Tooltip>
                      </Grid>
                      <Grid item>
                        <Tooltip title="Add" placement="right-end" color="success">
                          <Button>right-end</Button>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="center">
                    <Grid item>
                      <Tooltip title="Add" placement="bottom-start" color="success">
                        <Button>bottom-start</Button>
                      </Tooltip>
                      <Tooltip title="Add" placement="bottom" color="success">
                        <Button>bottom</Button>
                      </Tooltip>
                      <Tooltip title="Add" placement="bottom-end" color="success">
                        <Button>bottom-end</Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>

            {/* Triggers */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Triggers
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Grid container justifyContent="center">
                    <Grid item>
                      <Tooltip disableFocusListener title="Add" color="success">
                        <Button>Hover or touch</Button>
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <Tooltip disableHoverListener title="Add" color="success">
                        <Button>Focus or touch</Button>
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <Tooltip disableFocusListener disableTouchListener title="Add" color="success">
                        <Button>Hover</Button>
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <ClickAwayListener onClickAway={handleTooltipClose}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true
                            }}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="Add"
                            color="success"
                          >
                            <Button onClick={handleTooltipOpen}>Click</Button>
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Variable width */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Variable width
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Tooltip title={longText} color="success">
                    <Button sx={{ m: 1 }}>Default Width [300px]</Button>
                  </Tooltip>
                  <CustomWidthTooltip title={longText} color="success">
                    <Button sx={{ m: 1 }}>Custom Width [500px]</Button>
                  </CustomWidthTooltip>
                  <NoMaxWidthTooltip title={longText} color="success">
                    <Button sx={{ m: 1 }}>No wrapping</Button>
                  </NoMaxWidthTooltip>
                </Grid>
              </CardContent>
            </Paper>

            {/* Interactive  */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Interactive
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Tooltip title="Add" disableInteractive color="success">
                    <Button>Not interactive</Button>
                  </Tooltip>
                </Grid>
              </CardContent>
            </Paper>

            {/* Transitions  */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Transitions
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Tooltip title="Add" color="success">
                    <Button>Grow</Button>
                  </Tooltip>
                  <Tooltip TransitionComponent={Fade} color="success" TransitionProps={{ timeout: 600 }} title="Add">
                    <Button>Fade</Button>
                  </Tooltip>
                  <Tooltip TransitionComponent={Zoom} color="success" title="Add">
                    <Button>Zoom</Button>
                  </Tooltip>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default TooltipPage;
