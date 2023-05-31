// material-ui
// project imports
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useLocation } from 'react-router';
// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const components = [
    {
      id: 'components-buttons',
      title: 'Button',
      type: 'item',
      url: '/components-button',
      breadcrumbs: false
    },
    {
      id: 'components-radio',
      title: 'Radio',
      type: 'item',
      url: '/components-radio',
      breadcrumbs: false
    },
    {
      id: 'components-checkbox',
      title: 'Checkbox',
      type: 'item',
      url: '/components-checkbox',
      breadcrumbs: false
    },
    {
      id: 'components-menu',
      title: 'Menu',
      type: 'item',
      url: '/components-menu',
      breadcrumbs: false
    },
    {
      id: 'components-switch',
      title: 'Switch',
      type: 'item',
      url: '/components-Switch',
      breadcrumbs: false
    },
    {
      id: 'components-select',
      title: 'Select',
      type: 'item',
      url: '/components-select',
      breadcrumbs: false
    },
    {
      id: 'components-rating',
      title: 'Rating',
      type: 'item',
      url: '/components-rating',
      breadcrumbs: false
    }
  ];

  const navigate = useLocation();

  console.log('navigate', navigate);
  return (
    <>
      {navigate.pathname === '/email' && (
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
      {navigate.pathname === '/dashboard/default' && (
        <List>
          {['Dashboard'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
      {navigate.pathname === '/components-button' && (
        <List>
          {components.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default MenuList;
