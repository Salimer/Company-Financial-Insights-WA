import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import getRevenueArr from '../functions/getRevenueArr';
import getYearsArr from '../functions/getYearsArr';

function Graph({ company }) {
  console.log(ChartJS);
  const yearsArr = getYearsArr(company);
  const revenueArr = getRevenueArr(company);
  const data = {
    labels: yearsArr,
    datasets: [
      {
        label: 'Revenue',
        data: revenueArr,
      },
    ],
  };

  return (
    <Bar data={data} />
  );
}

Graph.propTypes = {
  company: PropTypes.arrayOf(Object).isRequired,
};

export default Graph;
