/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Add, ArrowBack, Calculate, ContentCopy, Delete, Menu } from '@mui/icons-material';
import { Button, MenuItem, Select, TextField } from '@mui/material';

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

const InvoiceHeader = () => {
  const currencies = [
    {
      value: 'USD',
      label: 'Swiss France'
    },
    {
      value: 'EUR',
      label: 'Euro'
    },
    {
      value: 'BTC',
      label: 'Pfund Sterling'
    },
    {
      value: 'JPY',
      label: 'US Dollar'
    }
  ];

  return (
    <div className="form-container">
      <form className="my-form">
        <div className="full-width">
          <div>
            <label className="input-title">Select Invoice Type</label>
          </div>
          <Select className="text-field textfield-border" variant="outlined" size="small" color="tertiary">
            {invoiceTypes.map((index, i) => (
              <MenuItem key={i} value={index.type}>
                {index.type}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <TextField label="Invoice No:" type="number" className="text-field textfield-border" color="tertiary" size="small" />
        </div>
        <div>
          <TextField label="Select Receiver:" variant="outlined" size="small" color="tertiary" className="text-field textfield-border" />
        </div>
        <div className="input-row">
          <TextField label="Purchaser:" variant="outlined" size="small" color="tertiary" className="text-field textfield-border" />
          <div className="default-icon form-icon">
            <Menu />
          </div>
        </div>
        <div className="input-row">
          <TextField label="Select Sender:" variant="outlined" size="small" color="tertiary" className="text-field textfield-border" />
          <div className="default-icon form-icon">
            <Menu />
          </div>
        </div>
        <div>
          <TextField label="Invoice Date:" variant="outlined" size="small" color="tertiary" className="text-field textfield-border" />
        </div>
        <div>
          <TextField label="Bank/IBAN:" variant="outlined" size="small" color="tertiary" className="text-field textfield-border" />
        </div>
        <div>
          <TextField label="Reference No:" variant="outlined" size="small" color="tertiary" className="text-field textfield-border" />
        </div>
      </form>
      <div className="invoice-header">
        <h5>Invoice Header Data</h5>
      </div>
      <form className="my-form">
        <div>
          <div>
            <label className="input-title">Currency</label>
          </div>
          <div>
            <Select className="text-field textfield-border" variant="outlined" color="tertiary" size="small">
              <MenuItem disabled defaultValue="Please Select">
                Please Select
              </MenuItem>
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <div>
          <label className="input-title">Total from line items</label>
          <div className="input-row">
            <TextField
              label="Total Amount excl. VAT"
              variant="outlined"
              size="small"
              type="number"
              className="text-field textfield-border"
              color="tertiary"
            />
            <div className="arrow-back form-icon default-icon">
              <ArrowBack />
            </div>
          </div>
        </div>
        <div>
          <TextField
            placeholder="0.00"
            variant="outlined"
            size="small"
            color="tertiary"
            type="number"
            className="text-field textfield-border"
          />
        </div>

        <div className="input-row">
          <TextField
            label="Charges"
            variant="outlined"
            color="tertiary"
            size="small"
            type="number"
            className="text-field textfield-border"
          />
          <div className="form-icon default-icon">
            <ContentCopy />
          </div>
        </div>
        <div className="full-width">
          <div className="input-row">
            <TextField label="Allows" variant="outlined" size="small" color="tertiary" className="text-field textfield-border" />
            <div className="default-icon form-icon">
              <ContentCopy />
            </div>
          </div>
        </div>
        <div className="full-width">
          <label className="input-title">VAT:</label>
          <div>
            <div className="input-row vat-row">
              <div>
                <TextField
                  label="Tax Base"
                  variant="outlined"
                  size="small"
                  color="tertiary"
                  type="text"
                  className="text-field textfield-border"
                />
              </div>
              <div>
                <TextField
                  label="VAT"
                  type="text"
                  variant="outlined"
                  size="small"
                  color="tertiary"
                  className="text-field textfield-border"
                />
              </div>
              <div>
                <TextField
                  label="Percentage"
                  type="text"
                  variant="outlined"
                  size="small"
                  color="tertiary"
                  className="text-field textfield-border"
                />
              </div>
              <div className="default-icon form-icon">
                <Calculate />
              </div>
              <div className="default-icon form-icon">
                <Delete />
              </div>
              <div className="default-icon form-icon">
                <Add />
              </div>
            </div>
          </div>
        </div>
        <div className="full-width">
          <div className="input-row">
            <TextField
              label="Total Amount incl. VAT"
              variant="outlined"
              color="tertiary"
              size="small"
              type="text"
              className="text-field textfield-border"
            />
            <div className="form-icon default-icon">
              <Calculate />
            </div>
          </div>
        </div>
        <div className="full-width">
          <label className="input-title">Cash Discount: Days</label>
          <div>
            <div className="input-row">
              <TextField
                placeholder="0"
                type="number"
                variant="outlined"
                color="tertiary"
                size="small"
                className="text-field textfield-border"
              />
              <TextField
                placeholder="0.00"
                type="number"
                variant="outlined"
                color="tertiary"
                size="small"
                className="text-field textfield-border"
              />
              <TextField
                placeholder="0.00"
                type="number"
                variant="outlined"
                color="tertiary"
                size="small"
                className="text-field textfield-border"
              />
              <div className="default-icon form-icon ">
                <Calculate />
              </div>
            </div>
          </div>
        </div>

        <div className="full-width">
          <div className="input-row">
            <TextField
              label="Total Cash"
              type="number"
              color="tertiary"
              variant="outlined"
              size="small"
              className="text-field textfield-border"
            />
            <div className=" form-icon default-icon">
              <Calculate />
            </div>
          </div>
        </div>
      </form>

      <div className="notes-footer">
        <div className="button-box">
          <Button variant="outlined" color="tertiary">
            Save
          </Button>
          <Button variant="outlined" color="tertiary">
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
