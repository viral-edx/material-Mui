import {
  Box,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import DividerPage from 'utils/divider';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

const TextFieldPage = () => {
  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Text Field
        </Typography>
        <Typography variant="h6" className="description">
          Text Fields let users enter and edit text.
        </Typography>
      </Box>

      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic TextField */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Basic TextField
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  <TextField id="filled-basic" label="Filled" variant="filled" />
                  <TextField id="standard-basic" label="Standard" variant="standard" />
                </Grid>
              </CardContent>
            </Paper>

            {/* Validation */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Validation
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <TextField error id="outlined-error" label="Error" defaultValue="Hello World" />
                  <TextField error id="outlined-error-helper-text" label="Error" defaultValue="Hello World" helperText="Incorrect entry." />
                </Grid>
              </CardContent>
            </Paper>

            {/* Form Props */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Form Props
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <TextField required id="filled-required" label="Required" defaultValue="Hello World" variant="filled" />
                  <TextField disabled id="filled-disabled" label="Disabled" defaultValue="Hello World" variant="filled" />
                  <TextField id="filled-password-input" label="Password" type="password" autoComplete="current-password" variant="filled" />
                  <TextField
                    id="filled-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                      readOnly: true
                    }}
                    variant="filled"
                  />
                  <TextField
                    id="filled-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant="filled"
                  />
                  <TextField id="filled-search" label="Search field" type="search" variant="filled" />
                  <TextField
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                  />
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Select */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Select
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <TextField
                    id="filled-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    helperText="Please select your currency"
                    variant="filled"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="filled-select-currency-native"
                    select
                    label="Native select"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true
                    }}
                    helperText="Please select your currency"
                    variant="filled"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </CardContent>
            </Paper>

            {/* Input Adornments */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Input Adornments
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <TextField
                    placeholder="Website URL"
                    id="url-start-adornment"
                    InputProps={{
                      startAdornment: 'https://'
                    }}
                  />
                  <TextField
                    placeholder="Website URL"
                    id="outlined-end-adornment"
                    InputProps={{
                      endAdornment: '.com'
                    }}
                  />
                  <OutlinedInput
                    id="text-adornment-password"
                    type="password"
                    placeholder="Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" edge="end">
                          <VisibilityOff />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <TextField
                    placeholder="0.00"
                    id="outlined-start-adornment"
                    InputProps={{
                      startAdornment: '$'
                    }}
                  />
                </Grid>
              </CardContent>
            </Paper>

            {/* Sizes */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Sizes
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <TextField label="Size" id="filled-size-small" defaultValue="Small" variant="filled" size="small" />
                  <TextField label="Size" id="filled-size-normal" defaultValue="Normal" variant="filled" />
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default TextFieldPage;
