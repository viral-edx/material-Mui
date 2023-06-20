import { ExpandMore, Grain, Home, NavigateNext, Whatshot } from '@mui/icons-material';
import { Box, Breadcrumbs, CardContent, Chip, Grid, Link, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import DividerPage from 'utils/Divider';
import { emphasize, styled } from '@mui/material/styles';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06)
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12)
    }
  };
});

const BreadcrumbsPage = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      MUI
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/material-ui/getting-started/installation/" onClick={handleClick}>
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>
  ];
  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Breadcrumbs
        </Typography>
        <Typography variant="h6" className="description">
          Breadcrumbs consist of a list of links that help a user visualize a page&apos;s location within the hierarchical structure of a
          website, and allow navigation up to any of its &quot;ancestors&quot;.
        </Typography>
      </Box>

      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic Breadcrumbs */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Basic Breadcrumbs
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                      MUI
                    </Link>
                    <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                      Core
                    </Link>
                    <Typography color="text.primary">Breadcrumbs</Typography>
                  </Breadcrumbs>
                </Grid>
              </CardContent>
            </Paper>

            {/* Breadcrumbs With Icons */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Breadcrumbs With Icons
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="inherit" href="/">
                      <Home sx={{ mr: 0.5 }} fontSize="inherit" />
                      MUI
                    </Link>
                    <Link
                      underline="hover"
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color="inherit"
                      href="/material-ui/getting-started/installation/"
                    >
                      <Whatshot sx={{ mr: 0.5 }} fontSize="inherit" />
                      Core
                    </Link>
                    <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
                      <Grain sx={{ mr: 0.5 }} fontSize="inherit" />
                      Breadcrumb
                    </Typography>
                  </Breadcrumbs>
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
                  <Breadcrumbs aria-label="breadcrumb">
                    <StyledBreadcrumb component="a" href="#" label="Home" icon={<Home fontSize="small" />} />
                    <StyledBreadcrumb component="a" href="#" label="Catalog" />
                    <StyledBreadcrumb label="Accessories" deleteIcon={<ExpandMore />} onDelete={handleClick} />
                  </Breadcrumbs>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Custom Separator */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Custom Separator
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                  </Breadcrumbs>
                  <Breadcrumbs separator="-" aria-label="breadcrumb">
                    {breadcrumbs}
                  </Breadcrumbs>
                  <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
                    {breadcrumbs}
                  </Breadcrumbs>
                </Grid>
              </CardContent>
            </Paper>

            {/* Collapsed Breadcrumbs */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Collapsed Breadcrumbs
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="#">
                      Home
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                      Catalog
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                      Accessories
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                      New Collection
                    </Link>
                    <Typography color="text.primary">Belts</Typography>
                  </Breadcrumbs>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default BreadcrumbsPage;
