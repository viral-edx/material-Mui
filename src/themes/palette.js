/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme) {
  return {
    mode: theme?.customization?.navType,
    common: {
      //   black: ' #111936'
    },
    primary: {
      //   light: '#eef2f6',
      //   main: '#2196f3',
      //   dark: '#1e88e5',
      //   200: '#90caf9',
      //   800: '#1565c0'
    },
    secondary: {
      //   light: '#b7eb00',
      //   main: '#673ab7',
      //   dark: '#5e35b1',
      //   200: '#b39ddb',
      //   800: '#4527a0'
    },
    error: {
      //   light: '#ef9a9a',
      //   main: '#f44336',
      //   dark: '#c62828'
    },
    orange: {
      //   light: '#fbe9e7',
      //   main: '#ffab91',
      //   dark: '#d84315'
    },
    warning: {
      //   light: '#fff8e1',
      //   main: '#ffe57f',
      //   dark: '#ffc107'
    },
    success: {
      //   light: '#b9f6ca',
      //   200: '#69f0ae',
      //   main: '#00e676',
      //   dark: '#00c853'
    },
    grey: {
      //   50: '#f8fafc',
      //   100: '#eef2f6',
      //   500: '#8492c4',
      //   600: theme.heading,
      //   700: theme.darkTextPrimary,
      //   900: theme.textDark
    },
    dark: {
      //   light: '#bdc8f0',
      //   main: '#29314f',
      //   dark: '#212946',
      //   800: '#1a223f',
      //   900: '#111936'
    },
    text: {
      //   primary: theme.darkTextPrimary,
      //   secondary: theme.darkTextSecondary,
      //   dark: theme.textDark,
      //   hint: '#eef2f6'
    },
    background: {
      //   paper: '#fff',
      //   default: '#fff'
    }
  };
}
