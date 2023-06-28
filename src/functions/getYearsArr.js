export default (ISs) => {
  const yearsArr = [];
  ISs.forEach((IS) => {
    yearsArr.push(IS.date.substring(0, 4));
  });

  return yearsArr;
};
