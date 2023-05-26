// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const components = {
  id: 'components',
  title: 'Components',
  type: 'group',
  children: [
    {
      id: 'components-buttons',
      title: 'Button',
      type: 'item',
      url: '/components-button',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'components-radio',
      title: 'Radio',
      type: 'item',
      url: '/components-radio',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'components-checkbox',
      title: 'Checkbox',
      type: 'item',
      url: '/components-checkbox',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'components-menu',
      title: 'Menu',
      type: 'item',
      url: '/components-menu',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'components-switch',
      title: 'Switch',
      type: 'item',
      url: '/components-Switch',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'components-select',
      title: 'Select',
      type: 'item',
      url: '/components-select',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'components-rating',
      title: 'Rating',
      type: 'item',
      url: '/components-rating',
      icon: icons.IconShadow,
      breadcrumbs: false
    }
    // {
    //   id: 'icons',
    //   title: 'Icons',
    //   type: 'collapse',
    //   icon: icons.IconWindmill,
    //   children: [
    //     {
    //       id: 'tabler-icons',
    //       title: 'Tabler Icons',
    //       type: 'item',
    //       url: '/icons/tabler-icons',
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'material-icons',
    //       title: 'Material Icons',
    //       type: 'item',
    //       external: true,
    //       target: '_blank',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       breadcrumbs: false
    //     }
    //   ]
    // }
  ]
};

export default components;
