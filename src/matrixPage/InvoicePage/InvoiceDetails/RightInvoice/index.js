/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Pdf from './Pdf';
import Workflow from './Workflow';
import Notes from './Notes';
import Journal from './Journal';

const RightInvoice = () => {
  const tabs = [
    {
      label: 'PDF',
      component: <Pdf />
    },
    {
      label: 'Workflow',
      component: <Workflow />
    },
    {
      label: 'Notes',
      component: <Notes />
    },
    {
      label: 'Journal',
      component: <Journal />
    }
  ];

  const [tab, setTab] = useState(tabs[0]);

  return (
    <>
      <div className="tab-design">
        <div className="tab-nav">
          {tabs.map((index, i) => (
            <div key={i} className={`tab-item ${tab.label === index.label && 'active'}`} onClick={() => setTab(index)}>
              <div className="tab-label">{index.label}</div>
              {tab.label === index.label && <div className="tab-underline"></div>}
            </div>
          ))}
        </div>
        <div className="second-form">{tab?.component}</div>
      </div>
    </>
  );
};

export default RightInvoice;
