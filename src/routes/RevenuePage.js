import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import fetchIS from '../redux/thunk';
import { selectApple } from '../redux/store';
import RevenueGraph from '../components/revenueGraph';
import getCompanyURL from '../functions/getCompanyURL';
import Graph from '../components/graph';
import LoadingScreen from '../components/loadingScreen';

const Revenue = () => {
  const location = useLocation();
  const { pathname } = location;
  const companyName = pathname.substring(1);
  const companyUrl = getCompanyURL(companyName);
  const {
    appleIS, isLoading, error, errMsg,
  } = useSelector(selectApple);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIS({ url: companyUrl }));
  }, [dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div>
        <p>
          Oops! An error occurred. Please try again.
          {errMsg}
        </p>
      </div>
    );
  }

  return (
    <>
      <Graph company={appleIS} />
      <RevenueGraph company={appleIS} />
    </>
  );
};

export default Revenue;
