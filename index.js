// Code your solution here

const findMatching = (arr, driver) => {
  return arr.filter((item) => item.toLowerCase() === driver.toLowerCase());
};

const fuzzyMatch = (arr, searchString) => {
  return arr.filter((item) =>
    item.toLowerCase().startsWith(searchString.toLowerCase())
  );
};

const matchName = (arr, name) => {
  return arr.filter((item) => item && item.name === name);
};
