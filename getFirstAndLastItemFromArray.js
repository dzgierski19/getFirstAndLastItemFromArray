const array = [1, 2, 3, 4, 6];

const getFirstAndLastItemFromArray = (array) => {
  isArrayAnArray(array);
  isArrayNotEmpty(array);
  return (
    "First Item of an Array: " +
    array.slice(0, 1) +
    "\n" +
    "Last Item of an Array: " +
    array.slice(-1)
  );
};

const isArrayAnArray = (input) => {
  if (!Array.isArray(input)) {
    throw new Error("You must type an Array");
  }
};

const isArrayNotEmpty = (input) => {
  if (input.length === 0) {
    throw new Error("You must not type an empty Array");
  }
};

const result1 = getFirstAndLastItemFromArray(array);
console.log(result1);
