import companiesArr from './companiesArr';

export default (company) => {
  if (!company) {
    return null; // or handle the case when company is undefined/null
  }
  const matchingSymbol = companiesArr.find(([, symbol]) => symbol === company);
  const companyName = matchingSymbol ? matchingSymbol[0] : '';
  return companyName;
};
