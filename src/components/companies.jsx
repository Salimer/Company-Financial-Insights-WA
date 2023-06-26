import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Companies = ({ companies }) => {
  console.log(companies);
  const brands = ['apple', 'facebook', 'smasung', 'xiaomi', 'twitter'];
  return (
    <Section className="grid grid-cols-2">
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
&:nth-child(odd) {
  background-color: #ddd;
}
`;
