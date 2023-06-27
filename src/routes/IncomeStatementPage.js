import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import fetchIS from '../redux/thunk';
import { selectApple } from '../redux/store';
import IncomeStatement from '../components/incomeStatement';
import getCompanyURL from '../functions/getCompanyURL';

const IncomeStatementPage = () => {
  const location = useLocation();
  const { pathname } = location;
  const companyName = pathname.split('/')[1];
  console.log(companyName);
  const companyUrl = getCompanyURL(companyName);
  const {
    appleIS, isLoading, error, errMsg,
  } = useSelector(selectApple);
  const dispatch = useDispatch();

  console.log(appleIS);
  useEffect(() => {
    dispatch(fetchIS({ url: companyUrl }));
  }, [dispatch, appleIS.length]);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>
          Oops! an error occurred. Please try again.
          {errMsg}
        </p>
      </div>
    );
  }

  return (
    <IncomeStatement company={appleIS} />
  );
};

export default IncomeStatementPage;
