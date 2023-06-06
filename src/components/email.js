import React, { useState } from 'react';
import { Box, IconButton, MenuItem, Checkbox, Menu } from '@mui/material';
import MailListItem from './MailListItem';
import { KeyboardArrowDownOutlined, KeyboardArrowLeft, KeyboardArrowRight, MoreVert, Refresh } from '@mui/icons-material';

const EmailPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box className="emailDiv">
        <Box display="inline-flex">
          <Checkbox color="default" />
          <IconButton onClick={handleMenuOpen}>
            <KeyboardArrowDownOutlined />
          </IconButton>
        </Box>
        <IconButton>
          <Refresh />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>

        <Box display="inline-flex" alignItems="center" ml="auto">
          <Box fontSize={12} color="text.secondary">
            1-50 of 1,971
          </Box>
          <IconButton disabled>
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton>
            <KeyboardArrowRight />
          </IconButton>
        </Box>
      </Box>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>All</MenuItem>
        <MenuItem onClick={handleMenuClose}>None</MenuItem>
        <MenuItem onClick={handleMenuClose}>Read</MenuItem>
        <MenuItem onClick={handleMenuClose}>Unread</MenuItem>
      </Menu>

      {getMailList().map((mail, i) => (
        <MailListItem key={i} {...mail} />
      ))}
    </>
  );
};

const getMailList = () => [
  {
    starred: true,
    labeled: true,
    title: (
      <>
        <b>Grab</b>
        <span>3</span>
      </>
    ),
    description: (
      <>
        <b>Your Grab E-Receipt</b> - ทานอาหารให้อร่อย! รวม THB 220 วันที่ | เวลา 21 May 20 08:39 +0700 รายละเอียดการเดินทาง GrabFood
        ชื่อผู้ขับ (GFH)xxx ชื่อผู้เดินทาง xxx รหัสการจอง IOS-91396443-9-056 สถานที่
      </>
    ),
    date: <b>May 21</b>
  },
  {
    labeled: true,
    read: true,
    title: (
      <>
        <span>Kunwar, me</span>
        <span>8</span>
      </>
    ),
    description: 'MUI Treasury - A Quick Question and Thank you :)',
    date: 'May 21'
  },
  {
    labeled: true,
    read: true,
    title: 'Google',
    description:
      'Security alert - iMovie was granted access to your Google Account xxx If you did not grant access, you should check this activity and secure your account. Check activity You received this email to',
    date: 'May 20'
  },
  {
    labeled: true,
    read: true,
    title: 'Alexandre Teyar',
    description: '[siriwatknp/mui-treasury] New component suggestion -> InsetHeader (#817)',
    date: 'May 18'
  },
  {
    read: true,
    title: 'Google',
    description:
      '2-Step Verification turned on - 2-Step Verification turned on xxx Your Google Account xxx is now protected with 2-Step Verification. When you sign in on a new or untrusted device, you',
    date: 'May 20'
  },
  {
    read: true,
    labeled: true,
    title: 'Olivier Tassinari',
    description: 'Re: [mui-org/material-ui] [docs] Improve mui-treasury integration (#21054)',
    date: 'May 16'
  },
  {
    read: true,
    labeled: true,
    title: (
      <>
        <span>Olivier Tassinari</span>
        <span>2</span>
      </>
    ),
    description: 'Re: [mui-org/material-ui] [docs] Improve mui-treasury integration (#21054)',
    date: 'May 16'
  },
  {
    read: true,
    labeled: true,
    title: 'Sebastian Silbermann',
    description: 'Re: [mui-org/material-ui] [docs] update links to mui-treasury (#21054)',
    date: 'May 16'
  },
  {
    labeled: true,
    title: (
      <>
        <span>
          James, me, <b>James</b>
        </span>
        <span>3</span>
      </>
    ),
    description: (
      <>
        <b>Hello Jun!</b> - Ok, so I am building a career discovery platform. The user should be able to register or sign in, then explore
        an interactive career path tool, ask questions or
      </>
    ),
    date: <b>May 15</b>
  },
  {
    read: true,
    labeled: true,
    title: 'Alexandre Teyar',
    description: '[siriwatknp/mui-treasury] [Discussion] Nested menu (#798)',
    date: 'May 14'
  },
  {
    read: true,
    labeled: true,
    title: 'Aaron Hayes',
    description: '[siriwatknp/mui-treasury] [Discussion] Form Components  (#792)',
    date: 'May 14'
  },
  {
    read: true,
    labeled: true,
    title: (
      <>
        <span>Olivier Tassinari</span>
        <span>6</span>
      </>
    ),
    description: '[mui-org/material-ui] [core] Batch small changes (#20877)',
    date: 'May 4'
  },
  {
    read: true,
    labeled: true,
    title: 'webface',
    description: 'Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)',
    date: 'May 3'
  },
  {
    read: true,
    label: true,
    title: 'Alexandre Teyar',
    description: 'Re: [siriwatknp/mui-treasury] Header default config not working (#714)',
    date: 'May 3'
  },
  {
    read: true,
    labeled: true,
    title: 'Siriwat',
    description: 'Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)',
    date: 'Apr 29'
  },
  {
    read: true,
    label: true,
    title: 'Mine',
    description: 'Re: [siriwatknp/mui-treasury] Header default config not working (#714)',
    date: 'Apr 29'
  },
  {
    labeled: true,
    title: 'webface',
    description: 'Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)',
    date: 'Apr 28'
  },
  {
    read: true,
    label: true,
    title: 'Alexandre Teyar',
    description: 'Re: [siriwatknp/mui-treasury] Header default config not working (#714)',
    date: 'Apr 22'
  },
  {
    title: (
      <>
        <b>allcontributors[bot]</b>
        <span>2</span>
      </>
    ),
    description: <b>[siriwatknp/mui-treasury] docs: add pacurtin as a contributor (#678)</b>,
    date: 'Apr 22'
  },
  {
    title: <b>allcontributors[bot]</b>,
    description: <b>[siriwatknp/mui-treasury] docs: add aress31 as a contributor (#679)</b>,
    date: 'Apr 22'
  },
  {
    read: true,
    label: true,
    title: 'Alice Wonder',
    description: 'Lead / Senior Engineers For Bangkok',
    date: 'Apr 21'
  },
  {
    read: true,
    labeled: true,
    title: 'webface',
    description: 'Re: [siriwatknp/mui-treasury] Overlay does not appear in mobile breakpoint other than with a preset config (#686)',
    date: 'Mar 30'
  },
  {
    read: true,
    label: true,
    title: 'Alexandre Teyar',
    description: 'Re: [siriwatknp/mui-treasury] Header default config not working (#714)',
    date: 'Mar 27'
  }
];

export default EmailPage;
