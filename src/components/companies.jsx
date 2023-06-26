import PropTypes from 'prop-types';

const Companies = ({ companies }) => {
  console.log(companies);
  const brands = ['apple', 'facebook', 'smasung', 'xiaomi', 'twitter'];
  return (
    <section className="grid grid-cols-2">
      {brands.map((brand) => (
        <button key={brand} className=" bg-black p-5 text-white" type="button">{brand}</button>
      ))}
    </section>
  );
};

export default Companies;

Companies.propTypes = {
  companies: PropTypes.arrayOf(Object).isRequired,
};
