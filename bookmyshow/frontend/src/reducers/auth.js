import {
  SET_TOKEN,
  SET_LOCATION,
  SET_LOGIN_MODAL,
  SET_REGISTRATION_MODAL,
} from "../actions/types";

const initialState = {
  usertoken:null,
  location: null,
  loginmodel: false,
  registermodel: false,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        usertoken: payload,
        loading: false,
      };
    case SET_LOGIN_MODAL:
      return {
        ...state,
        loginmodel: payload,
        loading: false,
      };
    case SET_REGISTRATION_MODAL:
      return {
        ...state,
        registermodel: payload,
        loading: false,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: payload,
        loading: false,
      };

    default:
      return state;
  }
}
