import PropTypes from 'prop-types';

const Button = ({ children }) => (
  <button className=" bg-buttonFirstColor p-5 text-white" type="button">{children}</button>
);
export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
