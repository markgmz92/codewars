const humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;
  let dogYears = 0;

  if (humanYears === 1) {
    catYears = 15;
  } else if (humanYears === 2) {
    catYears = 24;
  } else if (humanYears > 2) {
    catYears = 24 + (humanYears - 2) * 4;
  }

  if (humanYears === 1) {
    dogYears = 15;
  } else if (humanYears === 2) {
    dogYears = 24;
  } else if (humanYears > 2) {
    dogYears = 24 + (humanYears - 2) * 5;
  }
  return [humanYears, catYears, dogYears];
};
