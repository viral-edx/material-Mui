import React, { useState } from 'react';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';

const steps = ['Steps 1', 'Steps 2', 'Steps 3', 'Steps 4', 'Steps 5'];

function ProgressBar() {
  const [activeStep, setActiveStep] = useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <div className="stepper-root">
        <Stepper activeStep={activeStep} alternativeLabel connector={false} sx={{ alignItems: 'center', height: '100%' }}>
          <Step name="Step 1">
            <div className="stepLabelRoot">
              <StepLabel className="stepLabel" />
              <Typography>Steps 1</Typography>
            </div>
          </Step>
          <Step name="Step 2">
            <div className="stepLabelRoot">
              <StepLabel className="stepLabel" />
              <Typography>Steps 2</Typography>
            </div>
          </Step>
          <Step name="Step 3">
            <div className="stepLabelRoot">
              <StepLabel className="stepLabel" />
              <Typography>Steps 3</Typography>
            </div>
          </Step>
          <Step name="Step 4">
            <div className="stepLabelRoot">
              <StepLabel className="stepLabel" />
              <Typography>Steps 4</Typography>
            </div>
          </Step>
          <Step name="Step 5">
            <div className="stepLabelRoot">
              <StepLabel className="stepLabel" />
              <Typography>Steps 5</Typography>
            </div>
          </Step>
        </Stepper>
      </div>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {/* <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button> */}
            {/* <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button> */}
          </Box>
        </>
      )}
    </Box>
  );
}

export default ProgressBar;
