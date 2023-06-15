import React from 'react';
import GridPage from './GridPage/GridPage';

const InvoicePage = () => {
  return (
    <div>
      {/* --- added custom grid component with props data, itemsPerPage, header --- */}
      <GridPage data={dummyData} itemsPerPage={10} header="Invoices" />
    </div>
  );
};

//dummydata for grid
const dummyData = [
  {
    invoiceId: 5374186,
    sender: 'Indeed',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '20 Mar',
    totalAmount: '90',
    status: 'Done'
  },
  {
    invoiceId: 9015437,
    sender: 'Youtube',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '20 Mar',
    totalAmount: '400',
    status: 'Pending'
  },
  {
    invoiceId: 6823051,
    sender: 'MongoDB Team',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '22 Mar',
    totalAmount: '800',
    status: 'Pending'
  },
  {
    invoiceId: 7248165,
    sender: 'IT News',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '23 Mar',
    totalAmount: '900',
    status: 'Done'
  },
  {
    invoiceId: 8397024,
    sender: 'Daily Post',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '10 Mar',
    totalAmount: '100',
    status: 'Pending'
  },
  {
    invoiceId: 2659104,
    sender: 'Medium Daily Digest',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '28 Mar',
    totalAmount: '40',
    status: 'Done'
  },
  {
    invoiceId: 4928173,
    sender: 'Shopping habits',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '26 Mar',
    totalAmount: '200',
    status: 'Pending'
  },
  {
    invoiceId: 1769350,
    sender: 'Reddit',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '27 Mar',
    totalAmount: '1500',
    status: 'Done'
  },
  {
    invoiceId: 6345271,
    sender: 'Hacker News',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '25 Mar',
    totalAmount: '600',
    status: 'Pending'
  },
  {
    invoiceId: 3209451,
    sender: 'Hunt',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '24 Mar',
    totalAmount: '400',
    status: 'Done'
  },
  {
    invoiceId: 8650412,
    sender: 'Stack Overflow',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '22 Mar',
    totalAmount: '1200',
    status: 'Done'
  },
  {
    invoiceId: 5136270,
    sender: 'TechCrunch',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '29 Mar',
    totalAmount: '900',
    status: 'Pending'
  },
  {
    invoiceId: 7241396,
    sender: 'GitHub Portal',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '28 Mar',
    totalAmount: '250',
    status: 'Done'
  },
  {
    invoiceId: 3859021,
    sender: 'Reddit',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '27 Mar',
    totalAmount: '1500',
    status: 'Done'
  },
  {
    invoiceId: 9762301,
    sender: 'Hacker News',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '25 Mar',
    totalAmount: '600',
    status: 'Pending'
  },
  {
    invoiceId: 2781460,
    sender: 'Hunt',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '24 Mar',
    totalAmount: '400',
    status: 'Done'
  },
  {
    invoiceId: 5038176,
    sender: 'Stack Overflow',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '22 Mar',
    totalAmount: '1200',
    status: 'Done'
  },
  {
    invoiceId: 1925736,
    sender: 'TechCrunch',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '29 Mar',
    totalAmount: '900',
    status: 'Pending'
  },
  {
    invoiceId: 3489651,
    sender: 'GitHub Portal',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '28 Mar',
    totalAmount: '250',
    status: 'Done'
  },
  {
    invoiceId: 7650129,
    sender: 'Reddit',
    receiver: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    date: '27 Mar',
    totalAmount: '1500',
    status: 'Done'
  }
];

export default InvoicePage;
