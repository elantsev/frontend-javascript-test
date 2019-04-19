import {
  SET_DATA,
  SORT_DATA_NUM,
  SORT_DATA_ABC,
  ADD_PERSON
} from "./../actions/fetchDataActions";
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL
} from "../actions/fetchDataActions";

const initialState = {
  bigData: null,
  smallData: null,
  workData: null,
  isFetching: false,
  error: ""
};

export function fetchedData(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return { ...state, isFetching: true };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        [action.name]: action.payload,
        isFetching: false,
        error: ""
      };

    case GET_DATA_FAIL:
      return {
        ...state,
        error: action.payload.message,
        isFetching: false
      };

    case SET_DATA:
      return { ...state, workData: action.payload };

    case ADD_PERSON:
       return { workData: [action.payload, ...state.workData] };

    case SORT_DATA_NUM:
      return {
        ...state,
        workData: state.workData.sort(
          (a, b) => a[action.sortBy] - b[action.sortBy]
        )
      };
    case SORT_DATA_ABC:
      return {
        ...state,
        workData: state.workData.sort((a, b) => {
          if (a[action.sortBy] > b[action.sortBy]) {
            return 1;
          }
          if (a[action.sortBy] < b[action.sortBy]) {
            return -1;
          }
          return 0;
        })
      };

    default:
      return state;
  }
}
