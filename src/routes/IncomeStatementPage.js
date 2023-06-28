import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import fetchIS from '../redux/thunk';
import { selectApple } from '../redux/store';
import IncomeStatement from '../components/incomeStatement';
import getCompanyURL from '../functions/getCompanyURL';
import LoadingScreen from '../components/loadingScreen';

const IncomeStatementPage = () => {
  const location = useLocation();
  const { pathname } = location;
  const companyName = pathname.split('/')[1];
  const companyUrl = getCompanyURL(companyName);
  const {
    appleIS, isLoading, error, errMsg,
  } = useSelector(selectApple);
  const dispatch = useDispatch();
  useEffect(() => {
    if (appleIS.length < 1) {
      dispatch(fetchIS({ url: companyUrl }));
    }
  }, [dispatch, appleIS.length, companyUrl]);

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (error) {
    return (
      <div>
        <p>
          Oops! an error occurred. Please try again.
          <br />
          <br />
          {errMsg}
          <br />
          <br />
          In short, the number of requests to the API is being exceeded.
          come again tomorrow :)
        </p>
      </div>
    );
  }

  return (
    <IncomeStatement company={appleIS} />
  );
};

export default IncomeStatementPage;
