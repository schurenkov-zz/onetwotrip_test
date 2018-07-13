import * as types from "../actions/action-types";

export function getJson(flights) {
  return {
    type: types.GET_JSON,
    flights
  };
}
