import React from 'react';
import { Button, MenuItem, Select } from '@mui/material';
import SearchBar from './SearchBar';

const Notes = () => {
  return (
    <div className="notes-container">
      <div className="search-container">
        <SearchBar />
        <Button sx={{ borderRadius: '20px', width: '100px', height: '40px' }} variant="outlined" color="tertiary">
          Add
        </Button>
        <Select defaultValue={10}>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="25">25</MenuItem>
          <MenuItem value="50">50</MenuItem>
          <MenuItem value="100">100</MenuItem>
        </Select>
      </div>

      <div className="notes-box">
        <span className="notes-tab">Notes</span>
        <span className="date-tab">Date</span>
        <span className="action-tab">Action</span>
      </div>
      <div className="notes-data">
        <span>No data available in table</span>
      </div>
      <div className="notes-footer">
        <div className="entries-width">Showing 0 to 0 of 0 entries</div>
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
  );
};

export default Notes;
