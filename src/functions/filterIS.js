export default (IS) => {
  const { reportedCurrency, fillingDate, revenue } = IS;
  const filteredObj = {
    reportedCurrency,
    fillingDate,
    revenue,
  };

  return filteredObj;
};
