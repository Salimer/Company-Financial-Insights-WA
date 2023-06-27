import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import fetchIS from '../redux/thunk';
import { selectApple } from '../redux/store';
import RevenueGraph from '../components/revenueGraph';
import getCompanyURL from '../functions/getCompanyURL';

const Revenue = () => {
  const location = useLocation();
  const { pathname } = location;
  const companyName = pathname.substring(1);
  console.log(companyName);
  const companyUrl = getCompanyURL(companyName);
  const {
    appleIS, isLoading, error, errMsg,
  } = useSelector(selectApple);
  const dispatch = useDispatch();

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
    <RevenueGraph company={appleIS} />
  );
};

export default Revenue;
