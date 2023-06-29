import companiesArr from './companiesArr';

export default (company) => {
  if (!company) {
    return null; // or handle the case when company is undefined/null
  }
  const matchingSymbol = companiesArr.find(([symbol]) => symbol === company);
  const companyName = matchingSymbol ? matchingSymbol[1] : '';
  const url = `https://financialmodelingprep.com/api/v3/income-statement/${companyName}?limit=5&apikey=bb74ae2e8a98fa3f505d3d3a13742fe4`;
  return url;
};
