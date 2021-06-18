import { actionTypes } from "../constrants";

export const fetchData = (contacts) => {
  return {
    type: actionTypes.FETCH_DATA,
    payload: contacts,
  };
};

export const addContact = (contact) => {
  return {
    type: actionTypes.ADD_CONTACT,
    payload: contact,
  };
};

export const deleteContact = (contact) => {
  return {
    type: actionTypes.DELETE_CONTACT,
    payload: contact,
  };
};
