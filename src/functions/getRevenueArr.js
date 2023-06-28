export default (ISs) => {
  const revenueArr = [];
  ISs.forEach((IS) => {
    revenueArr.push(IS.revenue);
  });

  return revenueArr;
};
