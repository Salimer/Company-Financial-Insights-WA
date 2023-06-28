import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import styled from 'styled-components';
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
        label: 'Revenue in millions USD',
        data: revenueArr,
        backgroundColor: ['#4268af', '#3f62a5'],
        borderColor: 'white',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white', // Set the legend text color
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', // Set the x-axis ticks color
        },
      },
      y: {
        ticks: {
          color: 'white', // Set the y-axis ticks color
        },
      },
    },
  };

  return (
    <Section className="bg-headlineBg flex flex-col items-center">
      <h1 className="text-white text-lg p-5 md:p-10">Revenue for the past 5 years</h1>
      <div className="p-3 w-full">
        <Bar data={data} options={options} />
      </div>
    </Section>
  );
}

Graph.propTypes = {
  company: PropTypes.arrayOf(Object).isRequired,
};

export default Graph;

const Section = styled.section`

`;
