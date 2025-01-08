import { all } from "redux-saga/effects";
import generalSaga from "./general/saga";

export default function* sagas() {
  yield all([generalSaga()]);
}
