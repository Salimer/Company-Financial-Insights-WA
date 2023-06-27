import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import getCompanyName from '../functions/getCompanyName';

const RevenueGraph = ({ company }) => {
  console.log(company);
  const companyName = getCompanyName(company[0].symbol);
  // const years = [2020, 2021, 2022, 2023];
  const nthChildren = [1, 4, 5, 8];
  return (
    <Section nthChildren={nthChildren} className="grid grid-cols-2 w-full">
      <h1>Company revenue graph and years list</h1>
      {company.map((year) => (
        <Button key={year.date} url={`${companyName}/${year.date.substring(0, 4)}`}>{year.date.substring(0, 4)}</Button>
      ))}
    </Section>
  );
};

RevenueGraph.propTypes = {
  company: PropTypes.arrayOf(Object).isRequired,
};

export default RevenueGraph;

const Section = styled.section`
  ${({ nthChildren }) => {
    let css = '';
    nthChildren.forEach((num) => {
      css += `
        & > *:nth-child(${num}) {
          background-color: #3f62a5;
        }
      `;
    });
    return css;
  }}
`;
