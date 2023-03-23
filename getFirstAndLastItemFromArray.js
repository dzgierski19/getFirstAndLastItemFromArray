const array = [1, 2, 3, 4, 5];

const getFirstAndLastItemFromArray = (array) => {
  isArrayAnArray(array);
  isArrayNotEmpty(array);
  const firstItem = array.splice(0, 1);
  const lastItem = array.splice(-1, 1);

  return "FirstElement:" + firstItem + "LastItem:" + lastItem;
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
