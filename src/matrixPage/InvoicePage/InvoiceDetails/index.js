/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Delete, Menu, ArrowBack } from '@mui/icons-material';
import LeftInvoice from './LeftInvoice';
import ProgressBar from './ProgressBar';
import RightInvoice from './RightInvoice';

const InvoiceDetailed = () => {
  const navigate = useNavigate();
  const [invoiceType, setInvoiceType] = useState('Without order reference');

  return (
    <>
      <div className="invoice-container">
        <div className="invoiceId-header">
          <div className="back-arrow default-icon">
            <ArrowBack onClick={() => navigate('/matrix-invoice')} />
          </div>
          <div>
            <div className="delete-icon default-icon">
              <Delete />
            </div>
            <div className="more-icon default-icon">
              <Menu />
            </div>
          </div>
        </div>
        <h1 className="invoice-title">Title</h1>
        <ProgressBar />

        <div className="detail--wrap">
          <div className="detail--form">
            <LeftInvoice setInvoiceType={setInvoiceType} invoiceType={invoiceType} />
          </div>
          <div className="detail--tab">
            <RightInvoice />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetailed;
