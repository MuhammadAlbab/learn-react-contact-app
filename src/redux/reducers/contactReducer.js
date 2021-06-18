import { actionTypes } from "../constrants";

const initialState = [];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        contacts: action.payload,
      };
    case actionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case actionTypes.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};

export default contactReducer;
