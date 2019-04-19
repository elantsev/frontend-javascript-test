export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAIL = "GET_DATA_FAIL";

export function getData(source, name) {
  return dispatch => {
    dispatch({
      type: GET_DATA_REQUEST
    });

    fetch(source)
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        const payload = data;
        dispatch({
          type: GET_DATA_SUCCESS,
          payload,
          name
        });
        dispatch({
          type: "SET_DATA",
          payload
        });
      });
  };
}

export const SET_DATA = "SET_DATA";
export const ADD_PERSON = "ADD_PERSON";
export function setWorkData(type, payload) {
  return {
    type,
    payload
  };
}

export const SORT_DATA_NUM = "SORT_DATA_NUM";
export const SORT_DATA_ABC = "SORT_DATA_ABC";


