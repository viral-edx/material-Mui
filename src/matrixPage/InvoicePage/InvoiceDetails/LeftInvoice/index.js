/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import InvoiceHeader from './InvoiceHeader';
import InvoiceItems from './InvoiceItems';

const LeftInvoice = ({ setInvoiceType = () => {}, invoiceType }) => {
  const leftTabs = [
    {
      label: 'Header',
      component: <InvoiceHeader setInvoiceType={setInvoiceType} invoiceType={invoiceType} />
    },
    {
      label: 'Items',
      component: <InvoiceItems />
    }
  ];
  const [leftTab, setLeftTab] = useState(leftTabs[0]);

  return (
    <>
      <div className="tab-design">
        <div className="tab-nav">
          {leftTabs.map((index, i) => (
            <div key={i} className={`tab-item ${leftTab.label === index.label && 'active'}`} onClick={() => setLeftTab(index)}>
              <div className="tab-label">{index.label}</div>
              {leftTab.label === index.label && <div className="tab-underline"></div>}
            </div>
          ))}
        </div>
        <div className="form-wrapper">{leftTab?.component}</div>
      </div>
    </>
  );
};

export default LeftInvoice;
