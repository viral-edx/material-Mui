/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import SearchBar from './SearchBar';

const invoiceTypes = [
  {
    type: 'Without order reference',
    steps: ['Capture', 'Check & Account', 'Assignment release', 'Book', 'Finished']
  },
  {
    type: 'Delivery',
    steps: ['Requested', 'Confirmed', 'Ready to Ship', 'Shipping', 'Shipped']
  }
];

const Workflow = () => {
  const firstSteps = invoiceTypes[0].steps.map((step) => step);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    const style = document.createElement('style');
    style.textContent = `
            .wrapper {
              position: relative;
            }
      
            .container-overflow {
              font-size: 0.8rem;
              width: 200px;
              display: inline-block;
              border: 1px solid black;
              padding: 10px;
              background: white;
              border-radius: 10px;
              opacity: 0;
              transition: 0.6s all;
              position: absolute;
              bottom: 20px;
              left: 10px;
              z-index: 3;
            }`;

    wrapper.appendChild(style);

    const info = document.createElement('div');
    info.className = 'container-overflow';
    info.textContent = 'Your information text here.';

    wrapper.appendChild(info);
  }, []);

  return (
    <div>
      <form className="right-invoice-form">
        <div ref={wrapperRef} className="wrapper">
          <div>
            <label className="input-title">Select Standard Task</label>
          </div>
          <TextField label="Send Back to" className="text-field textfield-border" color="tertiary" size="small" />
        </div>
        <div>
          <TextField label="Forward to" type="text" className="text-field textfield-border" color="tertiary" size="small" />
        </div>

        <div>
          <div>
            <label className="input-title">Select Standard Task</label>
          </div>
          <Select fullWidth className="textfield-border" size="small" color="tertiary">
            {firstSteps.map((index, i) => (
              <MenuItem key={i} value={index}>
                {index}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <label className="input-title">Comment</label>
          <TextField fullWidth placeholder="Comment…" color="tertiary" className="textfield-border description-field" />
        </div>
      </form>
      <div className="button-box">
        <Button variant="outlined" color="tertiary">
          Submit
        </Button>
        <Button variant="outlined" color="tertiary">
          Clear Values
        </Button>
      </div>
      <div className="search-container">
        <SearchBar />
      </div>
      <div className="notes-container">
        <div className="notes-box">
          <span className="icon-tab">+</span>
          <span className="capture-tab">Task</span>
          <span className="workflow-tab">Workflow</span>
          <span className="released-tab">Status</span>
        </div>
        <div className="notes-box">
          <span className="icon-tab">+</span>
          <span className="capture-tab">Task</span>
          <span className="workflow-tab">Workflow</span>
          <span className="released-tab">Released</span>
        </div>
        <div className="notes-footer">
          <div className="entries-width">Showing 1 to 1 of 1 entries</div>
          <div className="button-box">
            <Button variant="outlined" color="tertiary">
              Previous
            </Button>
            <Button variant="outlined" color="tertiary">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
