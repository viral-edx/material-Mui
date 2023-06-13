/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import { IconArrowNarrowLeft, IconDotsVertical, IconTrash, IconSearch } from '@tabler/icons';
import { useNavigate } from 'react-router';
import { Box, Button, FormControl, MenuItem, Select, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import { IconMenu2, IconSquare, IconCalculator } from '@tabler/icons';

const InvoiceDetailed = () => {
  const navigate = useNavigate();
  const [invoiceType, setInvoiceType] = useState('Without order reference');

  return (
    <>
      <div className="invoice-container">
        <div className="invoiceId-header">
          <div className="back-arrow default-icon">
            <IconArrowNarrowLeft size={20} onClick={() => navigate('/matrix-invoice')} />
          </div>
          <div>
            <div className="delete-icon default-icon">
              <IconTrash size={20} />
            </div>
            <div className="more-icon default-icon">
              <IconDotsVertical size={20} />
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

// left invoice code started

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
      <Box component="form" noValidate autoComplete="off" className="my-form">
        <div className="full-width">
          <label className="input-title">Select Invoice Type</label>
          <FormControl fullWidth size="small">
            <TextField select defaultValue="USD" className="textfield_select">
              {currencies.map((option) => (
                <>
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                </>
              ))}
            </TextField>
          </FormControl>
        </div>

        {/* <div style={{ display: 'flex' }}> */}
        <TextField  label="Invoice No:" variant="outlined" size="small" type="number" className="textfield_select" />
        <TextField  label="Select Receiver:" variant="outlined" size="small" className="textfield_select" />
        <TextField  label="Purchaser:" variant="outlined" size="small" className="textfield_select" />
        <TextField  label="Select Sender:" variant="outlined" size="small" className="textfield_select" />
        <TextField  label="Invoice Date:" variant="outlined" size="small" className="textfield_select" />
        <TextField  label="Bank/IBAN:" variant="outlined" size="small" className="textfield_select" />
        <TextField  label="Reference No:" variant="outlined" size="small" className="textfield_select" />
        {/* </div> */}

        {/* write form code of header here  */}
      </Box>
      <div className="invoice-header">
        <h5>Invoice Header Data</h5>
      </div>
      <Box component="form" noValidate autoComplete="off" className="my-form">
        <FormControl fullWidth size="small">
          <label>
            <b>Currency</b>
          </label>
          <TextField select defaultValue="USD"  className="textfield_select">
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <FormControl fullWidth size="small">
          <label>
            <b>Total from line items</b>
          </label>
          <TextField select defaultValue="USD" className="textfield_select">
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <TextField label="0.00" variant="outlined" size="small" type="number" className="textfield_select" />
        <TextField label="Charges" variant="outlined" size="small" type="number"  className="textfield_select"/>
        <TextField label="Allows" variant="outlined" size="small" className="textfield_select" />

        <label>
          <b>VAT:</b>
        </label>
        <TextField label="Tax Base:" variant="outlined" size="small" className="textfield_select"/>
        <TextField label="VAT" variant="outlined" size="small" className="textfield_select"/>
        <TextField label="Percentage" variant="outlined" size="small" className="textfield_select"/>
        <TextField label="Total Amount incl. VAT:" variant="outlined" size="small" className="textfield_select"/>

        <label>
          <b>VAT:</b>
        </label>
        <TextField label="0" variant="outlined" size="small"className="textfield_select" />
        <TextField label="0.00" variant="outlined" size="small"className="textfield_select" />
        <TextField label="0.00" variant="outlined" size="small" className="textfield_select"/>
        <TextField label="Total Cash:" variant="outlined" size="small"className="textfield_select" />
        {/* write form code of header here  */}
      </Box>
      <div className="notes-footer">
        <div className="button-box">
          <Button variant="contained" color="success">
            Save
          </Button>
          <Button variant="outlined" color="success">
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

const InvoiceItems = () => {
  return (
    <div>
      <form className="my-form">
        <div className="">
          <TextField label="Position" className="text-field" />
        </div>
        <div>
          <TextField label="Order Position Reference" className="text-field" />
        </div>
        <div className="input-row">
          <TextField label="Article Number" className="text-field" type="number" />
          <div className="form-icon default-icon">
            <IconMenu2 />
          </div>
        </div>
        <div>
          <TextField label="Article Text" className="text-field" />
        </div>
        <div className="full-width">
          <label className="input-title">Description</label>
          <textarea rows={6} type="text" className="text-area" />
        </div>
        <div>
          <TextField label="Quantity" className="text-field" />
        </div>
        <div>
          <TextField label="Unit" className="text-field" type="number" />
        </div>
        <div>
          <TextField label="Price/Unit:" className="text-field" type="number" />
        </div>
        <div className="input-row">
          <TextField label="Price Quantity" className="text-field" type="number" />
          <div className="default-icon menu-icon">
            <IconSquare />
          </div>
          <span className="vat-width">incl. VAT</span>
        </div>
        <div>
          <TextField label="VAT" className="text-field" type="number" />
        </div>
        <div className="input-row">
          <TextField label="Percentage:" className="text-field" type="number" />
          <div className=" form-icon default-icon ">
            <IconCalculator />
          </div>
        </div>
        <div>
          <TextField label="Price Position excl. VAT" className="text-field" type="number" />
        </div>
        <div className="input-row">
          <TextField label="Price Position incl. VAT" className="text-field" type="number" />
          <div className=" form-icon default-icon">
            <IconCalculator />
          </div>
        </div>
      </form>
      <div className="notes-footer">
        <div className="button-box">
          <Button variant="contained" color="success">
            Add into item list
          </Button>
          <Button variant="outlined" color="success">
            Clear Values
          </Button>
        </div>
      </div>
    </div>
  );
};

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
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
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

// left invoice code stopped

// right invoice code started

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
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
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

const Pdf = () => {
  return (
    <div className="pdf-container">
      <iframe
        title="pdf"
        alt="pdf"
        height="940px"
        id="document"
        width="100%"
        src="https://portal.netgate.io-procurement.com/ngtFiles/netgate05/ams/2022/11/244896/3/150872/brack_24552918.pdf"
      ></iframe>
    </div>
  );
};
const Search = () => {
  return (
    <form className="search-form">
      <span className="">
        <IconSearch size="20" />
      </span>
      <input type="search" className="search-input" placeholder="Search here" />
    </form>
  );
};

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
      <div className="progress-box">
        <div className="invoice-header">
          <h5>Process Step: Capture</h5>
        </div>
      </div>
      <form className="right-invoice-form">
        <div ref={wrapperRef} className="wrapper">
          <md-outlined-text-field label="Send Back to" className="text-field" />
        </div>
        <div>
          <md-outlined-text-field label="Forward to" type="text" className="text-field" />
        </div>

        <div>
          <div>
            <label className="input-title">Select Standard Task</label>
          </div>
          <Select fullWidth>
            {firstSteps.map((index, i) => (
              <MenuItem key={i} value={index}>
                {index}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <label className="input-title">Comment</label>
          <TextField fullWidth placeholder="Comment…" />
        </div>
      </form>
      <div className="button-box">
        <Button variant="contained" color="success">
          Submit
        </Button>
        <Button variant="outlined" color="success">
          Clear Values
        </Button>
      </div>
      <div className="search-container">
        <Search />
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
            <Button variant="contained" color="success">
              Previous
            </Button>
            <Button variant="contained" color="success">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Notes = () => {
  return (
    <div className="notes-container">
      <div className="search-container">
        <Search />
        <Button sx={{ borderRadius: '20px', width: '100px', height: '40px' }} variant="contained" color="success">
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
          <Button variant="contained" color="success">
            Previous
          </Button>
          <Button variant="contained" color="success">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

// user Data
const userData = [
  {
    id: 1,
    name: 'John Smith',
    activity: 'Invoice Saved',
    date: '2023-04-21',
    image:
      'https://portal.netgate.io-procurement.com/ngtFiles/netgate05/ngtSysImages/profileImage/4B63E955-B111-AB64-55D9AB20A78299E1_9243.png',
    status: 'Saved'
  },
  {
    id: 2,
    name: 'Jane Doe',
    activity: 'Invoice not Saved',
    date: '2023-04-20',
    image:
      'https://portal.netgate.io-procurement.com/ngtFiles/netgate05/ngtSysImages/profileImage/4B63E955-B111-AB64-55D9AB20A78299E1_9243.png',
    status: ' Not Saved'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    activity: 'Invoice Saved',
    date: '2023-04-19',
    image:
      'https://portal.netgate.io-procurement.com/ngtFiles/netgate05/ngtSysImages/profileImage/4B63E955-B111-AB64-55D9AB20A78299E1_9243.png',
    status: 'Saved'
  }
];

const Journal = () => {
  return (
    <div className="journal-container">
      <div className="user-list">
        {userData.map((user) => (
          <>
            <div className="user-container">
              <div className="user-card" key={user.id}>
                <img src={user.image} alt={user.name} className="user-image" />
                <div className="user-details">
                  <h6>{user.name}</h6>
                  <p>{user.activity}</p>
                  <p className="date">{user.date}</p>
                </div>
              </div>
              <label className="user-status">{user.status}</label>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

// right invoice code stopped

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
export default InvoiceDetailed;
