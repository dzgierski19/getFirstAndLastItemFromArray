const exampleArray = [1, 2, 3, 4, 5];

const getFirstAndLastItemFromArray = (input) => {
  isArrayAnArray(input);
  isArrayNotEmpty(input);
  return (
    "First Item of an Array: " +
    input.slice(0, 1) +
    "\n" +
    "Last Item of an Array: " +
    input.slice(-1)
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

const result1 = getFirstAndLastItemFromArray(exampleArray);
console.log(result1);
