import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useLocation } from 'react-router-dom';
import { selectApple } from '../redux/store';
import getISofYear from '../functions/getISofYear';

const IncomeStatement = () => {
  const location = useLocation();
  const { pathname } = location;
  const { appleIS } = useSelector(selectApple);
  //   console.log(pathname.slice(-4));
  //   console.log(appleIS);
  const IS = getISofYear(appleIS, pathname.slice(-4));
  console.log(IS);
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
