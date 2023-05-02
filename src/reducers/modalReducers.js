import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const initialState = {
  isOpen: false,
  classData: null,
};

const modalReducers = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        classData: action.payload.classData,
      };
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default modalReducers;
