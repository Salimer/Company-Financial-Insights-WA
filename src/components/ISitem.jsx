import PropTypes, { string } from 'prop-types';

const ISitem = ({ parameter, index }) => {
  const even = index % 2 === 0;
  const itemColor = even ? 'bg-buttonSecondColor' : 'bg-buttonFirstColor';

  return (
    <li className={`flex justify-between text-white h-full p-5 ${itemColor}`}>
      <span className="">
        {parameter[0]}
      </span>
      <span className="">
        {parameter[1]}
      </span>
    </li>
  );
};

export default ISitem;

ISitem.propTypes = {
  parameter: PropTypes.arrayOf(string).isRequired,
  index: PropTypes.number.isRequired,
};
