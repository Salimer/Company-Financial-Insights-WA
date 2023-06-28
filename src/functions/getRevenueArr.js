export default (ISs) => {
  const revenueArr = [];
  ISs.forEach((IS) => {
    revenueArr.push(IS.revenue);
  });

  const firstThreeDigits = revenueArr.map((number) => {
    const numberString = number.toString();
    const digitsToKeep = numberString.slice(0, -6); // Remove the last six digits
    return digitsToKeep;
  });

  return firstThreeDigits;
};
