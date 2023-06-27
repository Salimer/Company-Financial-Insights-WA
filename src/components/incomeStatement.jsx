import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import getISofYear from '../functions/getISofYear';
import ISitem from './ISitem';

const IncomeStatement = ({ company }) => {
  const location = useLocation();
  const { pathname } = location;
  const IS = getISofYear(company, pathname.slice(-4));
  const entries = Object.entries(IS);

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
