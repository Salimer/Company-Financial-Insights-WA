import styled from 'styled-components';
import Button from './Button';

const Companies = () => {
  const brands = ['apple', 'facebook', 'smasung', 'xiaomi', 'twitter', 'sony'];
  const nthChildren = [1, 4, 5, 8];

  return (
    <Section nthChildren={nthChildren} className="grid grid-cols-2 w-full">
      {brands.map((brand) => (
        <Button key={brand} url={brand}>{brand}</Button>
      ))}
    </Section>
  );
};

export default Companies;

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
