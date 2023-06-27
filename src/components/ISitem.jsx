import PropTypes, { string } from 'prop-types';

const ISitem = ({ parameter }) => (
  <li className="flex justify-between flex-wrap">
    <span>
      {parameter[0]}
    </span>
    <span className="flex-wrap">
      {parameter[1]}
    </span>
  </li>
);

export default ISitem;

ISitem.propTypes = {
  parameter: PropTypes.arrayOf(string).isRequired,
};
