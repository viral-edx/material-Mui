import { createTheme } from '@mui/material/styles';

// project imports
import componentStyleOverrides from './compStyleOverride';
// import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization) => {
  const themeOption = {
    heading: '#121926',
    paper: '#fff',
    backgroundDefault: '#fff',
    background: '#eef2f6',
    darkTextPrimary: '#364152',
    darkTextSecondary: '#697586',
    textDark: '#121926',
    menuSelected: '#364152',
    menuSelectedBack: '#99ba09b0',
    divider: '#e3e8ef',
    customization
  };

  const themeOptions = {
    direction: 'ltr',
    // palette: themePalette(themeOption), // Use only when we want to changed the css of color variant of success
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    typography: themeTypography(themeOption)
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;
