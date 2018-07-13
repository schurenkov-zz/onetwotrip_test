import { combineReducers } from "redux";
import * as types from "../actions/action-types";

const initialState = {
  flights: []
};

const indexReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.GET_JSON:
      return Object.assign({}, state, { flights: action.flights.flights });
  }
  return state;
};

export default combineReducers({
  indexState: indexReducer
});
