/* @flow */
export const removeItemsFromArray = (input: number[], itemsToRemove: number[]): number[] => {
  const output = input.filter(item => !itemsToRemove.includes(item));
  return input.length === output.length ? input : output;
};

export const addItemsToArray = (input: Object[], itemsToAdd: Object[]): Object[] => {
  const newItems = itemsToAdd.filter(item => !input.includes(item));
  return newItems.length > 0 ? [...input, ...itemsToAdd] : input;
};
