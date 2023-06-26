import styled from 'styled-components';
import Button from './Button';

const RevenueGraph = () => {
  const years = [2020, 2021, 2022, 2023];
  const nthChildren = [1, 4, 5, 8];
  return (
    <Section nthChildren={nthChildren} className="grid grid-cols-2 w-full">
      <h1>Company revenue graph and years list</h1>
      {years.map((year) => (
        <Button key={year} url={`companyName/${year}`}>{year}</Button>
      ))}
    </Section>
  );
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
