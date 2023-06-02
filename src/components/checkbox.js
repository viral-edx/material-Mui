import React from 'react';
import { Typography, Box, Grid, Stack, Paper, Divider, CardContent, Checkbox, FormControlLabel } from '@mui/material';

import DividerPage from 'utils/divider';
import { pink } from '@mui/material/colors';
import { FavoriteBorder } from '@mui/icons-material';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const CheckboxPage = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const sizeLabel = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const colorLabel = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel label="Child 1" control={<Checkbox checked={checked[0]} onChange={handleChange2} />} />
      <FormControlLabel label="Child 2" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />
    </Box>
  );

  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Checkbox
        </Typography>
        <Typography variant="h6" className="description">
          Checkboxes allow the user to select one or more items from a set.
        </Typography>
      </Box>
      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic Checkbox */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Basic Checkbox
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Checkbox {...label} defaultChecked />
                  <Checkbox {...label} />
                  <Checkbox {...label} disabled />
                  <Checkbox {...label} disabled checked />
                </Grid>
              </CardContent>
            </Paper>

            {/* Labeled Checkbox */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Labeled Checkbox
              </Typography>
              <Divider sx={{ mt: 0.25, mb: 1.25 }} />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                  <FormControlLabel required control={<Checkbox />} label="Required" />
                  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                </Grid>
              </CardContent>
            </Paper>
            {/* With Indeterminate */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Indeterminate
              </Typography>
              <Divider sx={{ mt: 0.25, mb: 1.25 }} />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <div>
                    <FormControlLabel
                      label="Parent"
                      control={
                        <Checkbox checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />
                      }
                    />
                    {children}
                  </div>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Color Checkbox */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Color
              </Typography>
              <Divider sx={{ mt: 0.25, mb: 1.25 }} />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Checkbox {...colorLabel} defaultChecked />
                  <Checkbox {...colorLabel} defaultChecked color="secondary" />
                  <Checkbox {...colorLabel} defaultChecked color="success" />
                  <Checkbox {...colorLabel} defaultChecked color="default" />
                  <Checkbox
                    {...colorLabel}
                    defaultChecked
                    sx={{
                      color: pink[800],
                      '&.Mui-checked': {
                        color: pink[600]
                      }
                    }}
                  />
                </Grid>
              </CardContent>
            </Paper>

            {/* Icon Checkbox */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Icon
              </Typography>
              <Divider sx={{ mt: 0.25, mb: 1.25 }} />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
                </Grid>
              </CardContent>
            </Paper>

            {/* Sizes Button */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Size
              </Typography>
              <Divider sx={{ mt: 0.25, mb: 1.25 }} />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Checkbox {...sizeLabel} defaultChecked size="small" />
                  <Checkbox {...sizeLabel} defaultChecked />
                  <Checkbox {...sizeLabel} defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default CheckboxPage;
