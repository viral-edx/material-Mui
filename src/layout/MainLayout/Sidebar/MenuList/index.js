/* eslint-disable no-unused-vars */
// project imports
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router';
// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const dataId = useParams();
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
    },
    {
      id: 'components-auto-complete',
      title: 'Auto Complete',
      type: 'item',
      url: '/components-auto-complete',
      breadcrumbs: false
    },
    {
      id: 'components-chips',
      title: 'Chips',
      type: 'item',
      url: '/components-chips'
    },
    {
      id: 'components-Avatar',
      title: 'Avatar',
      type: 'item',
      url: '/components-avatar',
      breadcrumbs: false
    }
  ];

  const Matrix = [
    {
      id: 'matrix-grid',
      title: 'Grid',
      type: 'item',
      url: '/matrix-grid',
      breadcrumbs: false
    },
    {
      id: 'matrix-invoice',
      title: 'Invoice',
      type: 'item',
      url: dataId.id ? `/matrix-invoice/${dataId.id}` : '/matrix-invoice',
      breadcrumbs: false
    }
  ];

  const navigate = useLocation();
  const redirect = useNavigate();

  return (
    <>
      {/* dashboard pages */}
      {(navigate.pathname === '/dashboard/default' || navigate.pathname === '/') && (
        <List>
          {['Dashboard'].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              className={(navigate.pathname === '/dashboard/default' || navigate.pathname === '/') && 'selectedMenu'}
            >
              <ListItemButton className="options">
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}

      {/* matrix pages */}
      {navigate.pathname.includes('matrix') && (
        <List>
          {Matrix.map((key) => {
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

      {/* components pages */}
      {navigate.pathname.includes('/components') && (
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
