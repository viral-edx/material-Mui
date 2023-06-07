import { MailOutlined, Add, Remove } from '@mui/icons-material';
import { Badge, Box, Button, ButtonGroup, CardContent, FormControlLabel, Grid, Paper, Stack, Switch, Typography } from '@mui/material';
// import { Stack } from 'immutable';
import React from 'react';
import { useState } from 'react';
import DividerPage from 'utils/divider';
// import DividerPage from 'utils/divider';

const BadgePage = () => {
  const [count, setCount] = useState(1);
  const [invisible, setInvisible] = useState(false);
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Badges
        </Typography>
        <Typography variant="h6" className="description">
          Badge generates a small badge to the top-right of its child(ren).
        </Typography>
      </Box>
      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic Badge */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Basic
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Badge badgeContent={4} color="primary">
                    <MailOutlined />
                  </Badge>

                  <Badge badgeContent={4} color="success">
                    <MailOutlined />
                  </Badge>
                  <Badge badgeContent={4} color="warning">
                    <MailOutlined />
                  </Badge>

                  <Badge badgeContent={4} color="error">
                    <MailOutlined />
                  </Badge>
                </Grid>
              </CardContent>
            </Paper>

            {/* Overlap Badge */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Overlap
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Badge color="secondary" badgeContent=" ">
                    <MailOutlined />
                  </Badge>
                  <Badge color="secondary" badgeContent=" " variant="dot">
                    <MailOutlined />
                  </Badge>
                  <Badge color="secondary" overlap="circular" badgeContent=" ">
                    <MailOutlined />
                  </Badge>
                  <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
                    <MailOutlined />
                  </Badge>
                </Grid>
              </CardContent>
            </Paper>

            {/* Alignment Badge */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Alignment
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Badge badgeContent={9} color="primary">
                    <MailOutlined />
                  </Badge>
                  <Badge color="primary" variant="dot">
                    <MailOutlined />
                  </Badge>
                  <Badge
                    badgeContent={9}
                    color="primary"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                  >
                    <MailOutlined />
                  </Badge>
                  <Badge
                    badgeContent={9}
                    color="primary"
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left'
                    }}
                  >
                    <MailOutlined />
                  </Badge>
                  <Badge
                    badgeContent={99}
                    color="primary"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left'
                    }}
                  >
                    <MailOutlined />
                  </Badge>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Visibility Badge*/}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Visibility
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Badge color="primary" badgeContent={count}>
                    <MailOutlined />
                  </Badge>
                  <ButtonGroup>
                    <Button
                      aria-label="reduce"
                      onClick={() => {
                        setCount(Math.max(count - 1, 0));
                      }}
                    >
                      <Remove />
                    </Button>
                    <Button
                      aria-label="increase"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      <Add />
                    </Button>
                  </ButtonGroup>
                  <Badge color="primary" variant="dot" invisible={invisible}>
                    <MailOutlined />
                  </Badge>
                  <FormControlLabel
                    sx={{ color: 'text.primary' }}
                    control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
                    label="Show Badge"
                    labelPlacement="start"
                  />
                </Grid>
              </CardContent>
            </Paper>

            {/*  Maximum value Bagde */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Maximum value
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Badge color="secondary" badgeContent={99}>
                    <MailOutlined />
                  </Badge>
                  <Badge color="secondary" badgeContent={100}>
                    <MailOutlined />
                  </Badge>
                  <Badge color="secondary" badgeContent={1000} max={999}>
                    <MailOutlined />
                  </Badge>
                </Grid>
              </CardContent>
            </Paper>
            {/* Light Bagde */}

            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Light
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Badge badgeContent={4} color="primary" variant="light">
                    <MailOutlined />
                  </Badge>

                  <Badge badgeContent={4} color="success" variant="light">
                    <MailOutlined />
                  </Badge>
                  <Badge badgeContent={4} color="warning" variant="light">
                    <MailOutlined />
                  </Badge>
                  <Badge badgeContent={4} color="info" variant="light">
                    <MailOutlined />
                  </Badge>
                  <Badge badgeContent={4} color="error" variant="light">
                    <MailOutlined />
                  </Badge>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default BadgePage;
