import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ children, url, iconName }) => (
  <NavLink className="bg-buttonFirstColor p-5 text-white flex flex-col justify-center items-center border-white border" to={`/${url}`}>
    <span><ion-icon name={`${iconName}`} size="large" /></span>
    <span className=" text-lg tracking-wider font-bold">{children}</span>
  </NavLink>
);
export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};
