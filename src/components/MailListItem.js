import { Archive, CheckBoxOutlineBlank, Delete, Drafts, Star, StarBorder, WatchLater } from '@mui/icons-material';
import { Box, Checkbox, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { useState } from 'react';

const Div = styled('div')`
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
  &.MailListItem-read {
    background-color: rgba(242, 245, 245, 0.8);
  }
  &:hover {
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    z-index: 1;
  }
`;

const MailListItem = ({ read, initialStarred = false, description, date, title }) => {
  const [hovered, setHovered] = useState(false);
  const [checked] = useState(false);
  const [starred] = useState(initialStarred);
  return (
    <Div className={read && 'MailListItem-read'} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Box flexShrink={0} display="flex" justifyContent="space-around" width="100px">
        <div className={checked && 'MailListItem-checked'}>{checked ? <Checkbox /> : <CheckBoxOutlineBlank />}</div>
        <div className={starred && 'MailListItem-starred'}>{starred ? <Star /> : <StarBorder />}</div>
      </Box>

      <Typography marginLeft="15px">{title}</Typography>
      <Typography marginLeft="15px">{description}</Typography>
      {hovered ? (
        <Box flexShrink={0} ml={1} mr={0.5} display="flex" width="150px" justifyContent="space-between">
          <div className="action">
            <Archive />
          </div>
          <div className="action">
            <Delete />
          </div>
          <div className="action">
            <Drafts />
          </div>
          <div className="action">
            <WatchLater />
          </div>
        </Box>
      ) : (
        <div className="dateLables">{date}</div>
      )}
    </Div>
  );
};

export default MailListItem;
