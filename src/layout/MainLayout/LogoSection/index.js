// project imports
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  return (
    <Link to="/">
      <img src={logo} alt="main-logo" className="main-logo" />
    </Link>
  );
};

export default LogoSection;
