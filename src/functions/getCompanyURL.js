import companiesArr from './companiesArr';

export default (company) => {
  if (!company) {
    return null; // or handle the case when company is undefined/null
  }
  const matchingSymbol = companiesArr.find(([symbol]) => symbol === company);
  const companyName = matchingSymbol ? matchingSymbol[1] : '';
  const url = `https://financialmodelingprep.com/api/v3/income-statement/${companyName}?limit=10&apikey=0b669f139969f23b0a2e01394f344a8f`;
  return url;
};
