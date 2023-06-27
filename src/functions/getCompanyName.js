export default (company) => {
  const symbols = [['AAPL', 'apple'], ['GOOG', 'google']];
  const matchingSymbol = symbols.find(([symbol]) => symbol === company);
  const companyName = matchingSymbol ? matchingSymbol[1] : '';
  return companyName;
};
