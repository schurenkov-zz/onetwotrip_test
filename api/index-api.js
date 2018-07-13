import store from "../store/store";

import { getJson } from "../actions/index-actions";

import json from "../data/data.json";

export function getJsonLoad() {
  store.dispatch(getJson(json));
}
