import PropTypes, { string } from 'prop-types';

const ISitem = ({ parameter }) => (
  <li className="flex justify-between">
    <span className="">
      {parameter[0]}
    </span>
    <span className="">
      {parameter[1]}
    </span>
  </li>
);

export default ISitem;

ISitem.propTypes = {
  parameter: PropTypes.arrayOf(string).isRequired,
};
