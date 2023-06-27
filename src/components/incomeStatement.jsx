import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import getISofYear from '../functions/getISofYear';

const IncomeStatement = ({ company }) => {
  const location = useLocation();
  const { pathname } = location;
  const IS = getISofYear(company, pathname.slice(-4));
  const entries = Object.entries(IS);

  return (
    <div>
      {entries.map(([key, value]) => (
        <p key={key}>
          {key}
          :
          {value}
        </p>
      ))}
    </div>
  );
};

export default IncomeStatement;

IncomeStatement.propTypes = {
  company: PropTypes.arrayOf(Object).isRequired,
};
