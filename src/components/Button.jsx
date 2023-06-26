import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ children, url }) => (
  <NavLink className="bg-buttonFirstColor p-5 text-white" to={`/${url}`}>{children}</NavLink>
);
export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
