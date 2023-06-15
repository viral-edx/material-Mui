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
    receiver: 'LinkedIn News India shared a post:…',
    date: '20 Mar',
    totalAmount: '90',
    status: 'Done'
  },
  {
    invoiceId: 9015437,
    sender: 'Youtube',
    receiver: 'Nodejs Developer Roadmap 2023 | Melih Yumak in JavaScript in Plain English',
    date: '20 Mar',
    totalAmount: '400',
    status: 'Pending'
  },
  {
    invoiceId: 6823051,
    sender: 'MongoDB Team',
    receiver: 'Deploy a free sandbox cluster and start exploring Atlas',
    date: '22 Mar',
    totalAmount: '800',
    status: 'Pending'
  },
  {
    invoiceId: 7248165,
    sender: 'IT News',
    receiver: 'How to use chatGPT for UI/UX design: 25 examples | Thalion in Prototypr',
    date: '23 Mar',
    totalAmount: '900',
    status: 'Done'
  },
  {
    invoiceId: 8397024,
    sender: 'Daily Post',
    receiver: 'Google India just posted something that might be of interest to you.',
    date: '10 Mar',
    totalAmount: '100',
    status: 'Pending'
  },
  {
    invoiceId: 2659104,
    sender: 'Medium Daily Digest',
    receiver: 'Serializing JSON Data in Rails | Brenden Thornton in Zero Equals False.',
    date: '28 Mar',
    totalAmount: '40',
    status: 'Done'
  },
  {
    invoiceId: 4928173,
    sender: 'Shopping habits',
    receiver: '10 tips for improving your React code | Sarah Drasner in CSS-Tricks',
    date: '26 Mar',
    totalAmount: '200',
    status: 'Pending'
  },
  {
    invoiceId: 1769350,
    sender: 'Reddit',
    receiver: 'Discussion: What are some common mistakes new developers make?',
    date: '27 Mar',
    totalAmount: '1500',
    status: 'Done'
  },
  {
    invoiceId: 6345271,
    sender: 'Hacker News',
    receiver: 'Ask HN: What is the most exciting tech project you’ve worked on?',
    date: '25 Mar',
    totalAmount: '600',
    status: 'Pending'
  },
  {
    invoiceId: 3209451,
    sender: 'Hunt',
    receiver: 'The best design tools for non-designers in 2023 | Emily Smith in Creative Bloq',
    date: '24 Mar',
    totalAmount: '400',
    status: 'Done'
  },
  {
    invoiceId: 8650412,
    sender: 'Stack Overflow',
    receiver: 'How to fix "TypeError: Cannot read property \'map\' of undefined" in React',
    date: '22 Mar',
    totalAmount: '1200',
    status: 'Done'
  },
  {
    invoiceId: 5136270,
    sender: 'TechCrunch',
    receiver: 'NFT marketplace OpenSea confirms executive used insider knowledge to trade on its platform',
    date: '29 Mar',
    totalAmount: '900',
    status: 'Pending'
  },
  {
    invoiceId: 7241396,
    sender: 'GitHub Portal',
    receiver: 'How to use React with TypeScript | Robin Wieruch in RWieruch',
    date: '28 Mar',
    totalAmount: '250',
    status: 'Done'
  },
  {
    invoiceId: 3859021,
    sender: 'Reddit',
    receiver: 'Discussion: What are some common mistakes new developers make?',
    date: '27 Mar',
    totalAmount: '1500',
    status: 'Done'
  },
  {
    invoiceId: 9762301,
    sender: 'Hacker News',
    receiver: 'Ask HN: What is the most exciting tech project you’ve worked on?',
    date: '25 Mar',
    totalAmount: '600',
    status: 'Pending'
  },
  {
    invoiceId: 2781460,
    sender: 'Hunt',
    receiver: 'The best design tools for non-designers in 2023 | Emily Smith in Creative Bloq',
    date: '24 Mar',
    totalAmount: '400',
    status: 'Done'
  },
  {
    invoiceId: 5038176,
    sender: 'Stack Overflow',
    receiver: 'How to fix "TypeError: Cannot read property \'map\' of undefined" in React',
    date: '22 Mar',
    totalAmount: '1200',
    status: 'Done'
  },
  {
    invoiceId: 1925736,
    sender: 'TechCrunch',
    receiver: 'NFT marketplace OpenSea confirms executive used insider knowledge to trade on its platform',
    date: '29 Mar',
    totalAmount: '900',
    status: 'Pending'
  },
  {
    invoiceId: 3489651,
    sender: 'GitHub Portal',
    receiver: 'How to use React with TypeScript | Robin Wieruch in RWieruch',
    date: '28 Mar',
    totalAmount: '250',
    status: 'Done'
  },
  {
    invoiceId: 7650129,
    sender: 'Reddit',
    receiver: 'Discussion: What are some common mistakes new developers make?',
    date: '27 Mar',
    totalAmount: '1500',
    status: 'Done'
  }
];

export default InvoicePage;
