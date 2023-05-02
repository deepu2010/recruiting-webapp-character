import { ATTRIBUTE_LIST } from "../consts";

// Setting initial state for the attributes
const initialState = {};
ATTRIBUTE_LIST.forEach((attr) => {
  initialState[attr] = 9;
});

const attributeReducers = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ATTRIBUTE":
      const attributeName = action.payload.attributeName;
      const amount = action.payload.amount;
      return {
        ...state,
        [attributeName]: state[attributeName] + amount,
      };
    default:
      return state;
  }
};

export default attributeReducers;
