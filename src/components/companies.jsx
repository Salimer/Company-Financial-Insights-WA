import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Companies = ({ companies }) => {
  console.log(companies);
  const brands = ['apple', 'facebook', 'smasung', 'xiaomi', 'twitter'];
  return (
    <Section className="grid grid-cols-2 w-full">
      {brands.map((brand) => (
        <Button key={brand}>{brand}</Button>
      ))}
    </Section>
  );
};

export default Companies;

Companies.propTypes = {
  companies: PropTypes.arrayOf(Object).isRequired,
};

const Section = styled.section`
margin: 0 auto;
position: relative;
// &:nth-child(odd) {
//   background-color: #ddd;
// }
`;
