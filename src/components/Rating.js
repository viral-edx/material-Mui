import React, { useState } from 'react';
import { Typography, Box, Grid, Stack, Paper, CardContent, Rating } from '@mui/material';
import DividerPage from 'utils/Divider';
import { Star, Favorite, FavoriteBorder } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75'
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47'
  }
});

const RatingPage = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Rating
        </Typography>
        <Typography variant="h6" className="description">
          Ratings provide insight regarding others opinions and experiences, and can allow the user to submit a rating of their own.
        </Typography>
      </Box>
      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic Rating */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Basic Rating
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <div>
                    <Typography component="legend">Controlled</Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>
                  <div>
                    <Typography component="legend">Read only</Typography>
                    <Rating name="read-only" value={value} readOnly />
                  </div>
                  <div>
                    <Typography component="legend">Disabled</Typography>
                    <Rating name="disabled" value={value} disabled />
                  </div>
                  <div>
                    <Typography component="legend">No rating given</Typography>
                    <Rating name="no-value" value={null} />
                  </div>
                </Grid>
              </CardContent>
            </Paper>

            {/* Rating precision */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Rating precision
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                  <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </Grid>
              </CardContent>
            </Paper>

            {/* Hover feedback*/}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Hover feedback
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                  {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Sizes */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Sizes
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Rating name="size-small" defaultValue={2} size="small" />
                  <Rating name="size-medium" defaultValue={2} />
                  <Rating name="size-large" defaultValue={2} size="large" />
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
                  <Typography component="legend">Custom icon and color</Typography>
                  <StyledRating
                    name="customized-color"
                    defaultValue={2}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<Favorite fontSize="inherit" />}
                    emptyIcon={<FavoriteBorder fontSize="inherit" />}
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

export default RatingPage;
