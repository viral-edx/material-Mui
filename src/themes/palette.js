/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme) {
  return {
    mode: theme?.customization?.navType,
    common: {
      black: '#535353'
    },

    // This is the demo of the color code combination of light, main, dark, 200 and 800 and we can also add more color
    primary: {
      //   light: '#eef2f6',
      main: '#2196f3'
      //   dark: '#1e88e5',
      //   200: '#90caf9',
      //   800: '#1565c0'
    },
    secondary: {
      light: '#EBF9B8',
      main: '#673ab7',
      dark: '#1c1c1e0d'
    },
    tertiary: {
      main: '#6c7365'
    },
    info: {
      main: '#0288d1'
    },
    success: {
      main: '#2e7d32',
      dark: '#718125'
    },
    error: {
      main: '#d32f2f'
    },
    warning: {
      main: '#ed6c02'
    },
    green: {
      light: '#EBF9B8',
      main: '#b7eb00',
      dark: '#B9CF55',
      veryDark: '#b7eb0047'
    },
    dark: {
      main: '#29314f'
    },
    text: {
      light: '#8c8c8c',
      primary: '#364152',
      dark: '#17181636'
    },
    borderColor: {
      main: '#E6EBF1'
    },
    background: {
      paper: '#fffefe',
      default: '#fffefe'
    }
  };
}
