/* eslint-disable no-unused-vars */
// project imports
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useLocation, useNavigate } from 'react-router';
// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const components = [
    {
      id: 'components-buttons',
      title: 'Button',
      type: 'item',
      url: '/',
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
      id: 'components-slider',
      title: 'Slider',
      type: 'item',
      url: '/components-slider',
      breadcrumbs: false
    },
    {
      id: 'components-text-field',
      title: 'Text Field',
      type: 'item',
      url: '/components-text-field',
      breadcrumbs: false
    },
    {
      id: 'components-badge',
      title: 'Badge',
      type: 'item',
      url: '/components-badge',
      breadcrumbs: false
    },
    {
      id: 'components-divider',
      title: 'Divider',
      type: 'item',
      url: '/components-divider',
      breadcrumbs: false
    },
    {
      id: 'components-tooltip',
      title: 'Tooltip',
      type: 'item',
      url: '/components-tooltip',
      breadcrumbs: false
    },
    {
      id: 'components-alert',
      title: 'Alert',
      type: 'item',
      url: '/components-alert',
      breadcrumbs: false
    },
    {
      id: 'components-progress',
      title: 'Progress',
      type: 'item',
      url: '/components-progress',
      breadcrumbs: false
    },
    {
      id: 'components-card',
      title: 'Card',
      type: 'item',
      url: '/components-card',
      breadcrumbs: false
    },
    {
      id: 'components-pagination',
      title: 'Pagination',
      type: 'item',
      url: '/components-pagination',
      breadcrumbs: false
    }
  ];

  const navigate = useLocation();
  const redirect = useNavigate();

  return (
    <>
      {navigate.pathname === '/email' && (
        <List>
          {['Grid'].map((text, index) => (
            <ListItem key={text} disablePadding className={text === 'Grid' && 'selectedMenu'}>
              <ListItemButton className="options">
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
            <ListItem key={text} disablePadding className={navigate.pathname === '/dashboard/default' && 'selectedMenu'}>
              <ListItemButton className="options">
                <ListItemIcon>{index % 2 === 0 ? <MailIcon /> : <InboxIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}

      {(navigate.pathname.includes('/components') || navigate.pathname === '/') && (
        <List>
          {components.map((key) => {
            return (
              <ListItem
                key={key}
                disablePadding
                onClick={() => redirect(key.url)}
                className={navigate.pathname === key.url && 'selectedMenu'}
              >
                <ListItemButton className="options">
                  <ListItemText primary={key.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};

export default MenuList;
