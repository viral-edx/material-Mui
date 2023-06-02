import { Archive, CheckBoxOutlineBlank, Delete, Drafts, Star, StarBorder, WatchLater, CheckBox } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';

const MailListItem = ({ read, initialStarred = false, description, date, title }) => {
  const [hovered, setHovered] = useState(false);
  const [checked] = useState(false);
  const [starred] = useState(initialStarred);

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <tr className={read && 'MailListItem-read'} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <td>
        <div
          style={{ display: 'flex', marginTop: '7px', width: '38px', justifyContent: 'space-around' }}
          className={checked && 'MailListItem-checked'}
        >
          {checked ? <CheckBox /> : <CheckBoxOutlineBlank />}
        </div>
      </td>
      <td>
        <div
          style={{ display: 'flex', marginTop: '7px', width: '38px', justifyContent: 'space-around' }}
          className={starred && 'MailListItem-starred'}
        >
          {starred ? <Star /> : <StarBorder />}
        </div>
      </td>
      <td>
        <div style={{ display: 'flex' }}>{title}</div>
      </td>
      <td className="description-table">
        <div style={{ display: 'flex' }}>{description}</div>
      </td>
      <td>
        {hovered ? (
          <div className="actions">
            <div className="action">
              <Archive />
              <Delete />
              <Drafts />
              <WatchLater />
            </div>
          </div>
        ) : (
          <div className="dateLabels">{date}</div>
        )}
      </td>
    </tr>
  );
};

export default MailListItem;
