import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import getCompanyName from '../functions/getCompanyName';

const RevenueGraph = ({ company }) => {
  const companyName = getCompanyName(company[0].symbol);
  const nthChildren = [1, 4, 5, 8];
  return (
    <>
      <h1>Company revenue graph and years list</h1>
      <Section nthChildren={nthChildren} className="grid grid-cols-2 w-full h-screen">
        {company.map((year) => (
          <Button
            key={year.date}
            url={`${companyName}/${year.date.substring(0, 4)}`}
            iconName="calendar-outline"
          >
            {year.date.substring(0, 4)}
          </Button>
        ))}
      </Section>
    </>
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
    css += `
      & > *:nth-child(5) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    `;
    return css;
  }}
`;
