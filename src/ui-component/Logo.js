/* eslint-disable prettier/prettier */
// material-ui
// import { useTheme } from '@mui/material/styles';

import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  // const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Berry" width="100" />
     *
     */
    <Link to="/">
      <img src={logo} alt="main-logo" className="main-logo" />
    </Link>
  );
};

export default Logo;
