// import { Archive, CheckBoxOutlineBlank, Delete, Drafts, Label, LabelOutlined, Star, StarBorder, WatchLater } from '@mui/icons-material';
// import { Box, Checkbox } from '@mui/material';
// import { styled } from '@mui/system';
// import { withStyles } from '@mui/styles';
// import React from 'react';

// const StyledTooltip = withStyles({
//   tooltip: {
//     backgroundColor: 'rgba(0,0,0,0.72)',
//     fontSize: 12,
//     marginTop: 0
//   }
// })(Tooltip);

// const Action = styled(IconButton)`
//   color: rgba(0, 0, 0, 0.54);
//   &:hover {
//     color: #000;
//   }
// `;

// const Div = styled('div')`
//   height: 40px;
//   display: flex;
//   align-items: center;
//   box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
//   &.MailListItem-read {
//     background-color: rgba(242, 245, 245, 0.8);
//   }
//   &:hover {
//     box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
//     z-index: 1;
//   }
// `;

// const StyledIconButton = styled(IconButton)`
//   color: rgba(0, 0, 0, 0.2);
//   &:hover {
//     color: rgba(0, 0, 0, 0.87);
//   }
//   &.MailListItem-checked {
//     color: rgba(0, 0, 0, 0.87);
//   }
//   &.MailListItem-starred,
//   &.MailListItem-labeled {
//     color: #f8cb69;
//   }
// `;

// const Text = styled('div')`
//   -webkit-font-smoothing: antialiased;
//   font-size: 14px;
//   color: #5f6368;
//   min-width: 0;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;

//   b {
//     color: rgba(0, 0, 0, 0.87);
//   }
// `;

// const Title = styled(Text)`
//   flex-basis: 200px;
//   flex-shrink: 0;

//   & > *:not(:first-child) {
//     font-size: 12px;
//     margin-left: 4px;
//   }
// `;

// const DateLabel = styled(Text)`
//   font-size: 12px;
//   flex-basis: 100px;
//   flex-shrink: 0;
//   padding-right: 16px;
//   text-align: right;
// `;

// const MailListItem = ({ read, initialStarred = false, initialLabeled = false, title, description, date }) => {
//   const actionStyles = useSizedIconButtonStyles({ childSize: 20, padding: 10 });
//   const gutterStyles = useRowGutterStyles({ size: -10, before: -8 });
//   const [hovered, setHovered] = React.useState(false);
//   const [checked, setChecked] = React.useState(false);
//   const [starred, setStarred] = React.useState(initialStarred);
//   const [labeled, setLabeled] = React.useState(initialLabeled);
//   return (
//     <Div className={cx(read && 'MailListItem-read')} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
//       <Box flexShrink={0} className={gutterStyles.parent}>
//         <StyledIconButton className={cx(checked && 'MailListItem-checked')} classes={actionStyles} onClick={() => setChecked(!checked)}>
//           {checked ? <Checkbox /> : <CheckBoxOutlineBlank />}
//         </StyledIconButton>
//         <StyledIconButton className={cx(starred && 'MailListItem-starred')} classes={actionStyles} onClick={() => setStarred(!starred)}>
//           {starred ? <Star /> : <StarBorder />}
//         </StyledIconButton>
//         <StyledIconButton className={cx(labeled && 'MailListItem-labeled')} classes={actionStyles} onClick={() => setLabeled(!labeled)}>
//           {labeled ? <Label /> : <LabelOutlined />}
//         </StyledIconButton>
//       </Box>
//       <Title>{title}</Title>
//       <Text>{description}</Text>
//       {hovered ? (
//         <Box flexShrink={0} ml={1} mr={0.5}>
//           <StyledTooltip title="Archived">
//             <Action classes={actionStyles}>
//               <Archive />
//             </Action>
//           </StyledTooltip>
//           <StyledTooltip title="Delete">
//             <Action classes={actionStyles}>
//               <Delete />
//             </Action>
//           </StyledTooltip>
//           <StyledTooltip title="Mark as read">
//             <Action classes={actionStyles}>
//               <Drafts />
//             </Action>
//           </StyledTooltip>
//           <StyledTooltip title="Snooze">
//             <Action classes={actionStyles}>
//               <WatchLater />
//             </Action>
//           </StyledTooltip>
//         </Box>
//       ) : (
//         <DateLabel>{date}</DateLabel>
//       )}
//     </Div>
//   );
// };

// export default MailListItem;

import { Archive, CheckBoxOutlineBlank, Delete, Drafts, Label, LabelOutlined, Star, StarBorder, WatchLater } from '@mui/icons-material';
import { Box, Checkbox, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

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

// const StyledIconButton = styled(IconButton)`
//   color: rgba(0, 0, 0, 0.2);
//   &:hover {
//     color: rgba(0, 0, 0, 0.87);
//   }
//   &.MailListItem-checked {
//     color: rgba(0, 0, 0, 0.87);
//   }
//   &.MailListItem-starred,
//   &.MailListItem-labeled {
//     color: #f8cb69;
//   }
// `;

// const StyledTooltip = withStyles({
//   tooltip: {
//     backgroundColor: 'rgba(0,0,0,0.72)',
//     fontSize: 12,
//     marginTop: 0
//   }
// })(Tooltip);

// const DateLabel = styled(Text)`
//   font-size: 12px;
//   flex-basis: 100px;
//   flex-shrink: 0;
//   padding-right: 16px;
//   text-align: right;
// `;

// const Action = styled(IconButton)`
//   color: rgba(0, 0, 0, 0.54);
//   &:hover {
//     color: #000;
//   }
// `;

const MailListItem = ({ read, initialStarred = false, initialLabeled = false, description, date }) => {
  const [hovered, setHovered] = React.useState(false);
  const [checked] = React.useState(false);
  const [starred] = React.useState(initialStarred);
  const [labeled] = React.useState(initialLabeled);
  return (
    <Div className={read && 'MailListItem-read'} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Box flexShrink={0} display="flex" justifyContent="space-around" width="100px">
        <div className={checked && 'MailListItem-checked'}>{checked ? <Checkbox /> : <CheckBoxOutlineBlank />}</div>
        <div className={starred && 'MailListItem-starred'}>{starred ? <Star /> : <StarBorder />}</div>
        <div className={labeled && 'MailListItem-labeled'}>{labeled ? <Label /> : <LabelOutlined />}</div>
      </Box>

      <Typography marginLeft="15px">{description}</Typography>
      {hovered ? (
        <Box flexShrink={0} ml={1} mr={0.5} display="flex" width="150px" justifyContent="space-between">
          <div>
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
