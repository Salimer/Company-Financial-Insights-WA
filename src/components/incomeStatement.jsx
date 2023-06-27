import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import getISofYear from '../functions/getISofYear';
import ISitem from './ISitem';
import filterIS from '../functions/filterIS';

const IncomeStatement = ({ company }) => {
  const location = useLocation();
  const { pathname } = location;
  const IS = getISofYear(company, pathname.slice(-4));
  const filteredIS = filterIS(IS);
  const entries = Object.entries(filteredIS);

  return (
    <ul>
      {entries.map(([key, value]) => (
        <ISitem key={key} parameter={[key, value]} />
      ))}
    </ul>
  );
};

export default IncomeStatement;

IncomeStatement.propTypes = {
  company: PropTypes.arrayOf(Object).isRequired,
};
