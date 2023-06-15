/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import React from 'react';

const SplitData = ({ setToggle = () => {}, splitData, toggle, ...props }) => {
  return (
    <>
      {splitData !== null ? (
        <div>
          <div className="table-data">
            <div style={{ width: '100%' }}>
              <div className="table-split-data">
                <h4>Invoice ID:</h4>
                <p>{splitData.invoiceId}</p>
              </div>
              <div className="table-split-data">
                <h4>Sender:</h4>
                <p>{splitData.sender}</p>
              </div>
              <div className="table-split-data">
                <h4>Receiver:</h4>
                <p>{splitData.receiver}</p>
              </div>
              <div className="table-split-data">
                <h4>Status:</h4>
                <p>{splitData.status}</p>
              </div>
              <div className="table-split-data">
                <h4>Date:</h4>
                <p>{splitData.date}</p>
              </div>
              <Button variant="contained" color="success" style={{ marginRight: '20px', width: '100%' }}>
                Click for more details
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className={`splitempty ${props.splitRight && 'splitempty-right'}`}>
          <h4>No conversations selected</h4>
          <p>Please select any conversations.</p>
        </div>
      )}
    </>
  );
};

export default SplitData;
