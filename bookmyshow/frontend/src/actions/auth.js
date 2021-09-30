import {SET_TOKEN,  SET_LOCATION, SET_LOGIN_MODAL, SET_REGISTRATION_MODAL } from "./types"

export const usertoken = (token) => async (dispatch) => {
  dispatch({
    type: SET_TOKEN,
    payload: token,
  })
}

export const loginmodal = (location) => async (dispatch) => {
  dispatch({
    type: SET_LOGIN_MODAL,
    payload: location,
  })
}

export const registermodal = (location) => async (dispatch) => {
  dispatch({
    type: SET_REGISTRATION_MODAL,
    payload: location,
  })
}

export const selectedlocation = (location) => async (dispatch) => {
  dispatch({
    type: SET_LOCATION,
    payload: location,
  })
}
