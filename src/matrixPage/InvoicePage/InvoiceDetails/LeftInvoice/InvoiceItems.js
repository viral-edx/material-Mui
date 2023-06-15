/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Calculate, Menu } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';

const InvoiceItems = () => {
  return (
    <div>
      <form className="my-form">
        <div>
          <TextField label="Position" className="text-field textfield-border" size="small" color="tertiary" />
        </div>
        <div>
          <TextField label="Order Position Reference" className="text-field textfield-border" color="tertiary" size="small" />
        </div>
        <div className="input-row">
          <TextField label="Article Number" className="text-field textfield-border" type="number" color="tertiary" size="small" />
          <div className="form-icon default-icon">
            <Menu />
          </div>
        </div>
        <div>
          <TextField label="Article Text" className="text-field textfield-border" color="tertiary" size="small" />
        </div>
        <div className="full-width">
          <label className="input-title">Description</label>
          <TextField fullWidth placeholder="Description..." color="tertiary" className="textfield-border description-field" />
        </div>
        <div>
          <TextField label="Quantity" className="text-field textfield-border" color="tertiary" size="small" />
        </div>
        <div>
          <TextField label="Unit" className="text-field textfield-border" type="number" color="tertiary" size="small" />
        </div>
        <div>
          <TextField label="Price/Unit:" className="text-field textfield-border" type="number" color="tertiary" size="small" />
        </div>
        <div className="input-row">
          <TextField label="Price Quantity" className="text-field textfield-border" type="number" color="tertiary" size="small" />
        </div>
        <div>
          <TextField label="VAT" className="text-field textfield-border" type="number" color="tertiary" size="small" />
        </div>
        <div className="input-row">
          <TextField label="Percentage:" className="text-field textfield-border" type="number" color="tertiary" size="small" />
          <div className=" form-icon default-icon ">
            <Calculate />
          </div>
        </div>
        <div>
          <TextField label="Price Position excl. VAT" className="text-field textfield-border" color="tertiary" type="number" size="small" />
        </div>
        <div className="input-row">
          <TextField label="Price Position incl. VAT" className="text-field textfield-border" color="tertiary" type="number" size="small" />
          <div className=" form-icon default-icon">
            <Calculate />
          </div>
        </div>
      </form>
      <div className="notes-footer">
        <div className="button-box">
          <Button variant="outlined" color="tertiary">
            Add into item list
          </Button>
          <Button variant="outlined" color="tertiary">
            Clear Values
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceItems;
