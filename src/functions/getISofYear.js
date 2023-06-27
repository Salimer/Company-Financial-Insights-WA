export default (company, year) => {
  if (!company) {
    return null; // or handle the case when company is undefined/null
  }

  const matchingYear = company.find((item) => item.date.substring(0, 4) === year);
  const ISobj = matchingYear || null; // or handle the case when matchingYear is undefined/null
  return ISobj;
};
