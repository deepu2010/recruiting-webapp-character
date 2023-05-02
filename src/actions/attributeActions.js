export const updateAttribute = (attributeName, amount) => {
  return {
    type: "UPDATE_ATTRIBUTE",
    payload: {
      attributeName,
      amount,
    },
  };
};
