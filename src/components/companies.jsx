import PropTypes from 'prop-types';

const Companies = ({ companies }) => {
  console.log(companies);
  return (<h1>companies</h1>);
};

export default Companies;

Companies.propTypes = {
  companies: PropTypes.arrayOf(Object).isRequired,
};
