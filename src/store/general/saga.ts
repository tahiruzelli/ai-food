import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";

import { GET_SETTINGS_STARTED } from "./types";

import { getSettingsSucceess, getSettingsError } from "./actions";
import { Urls } from "../../utils/constans/urls";
import { getToken } from "../user/selectors";

function* setttingsGeneralTask(action: any) {
  const { payload } = action;
  try {
    const response = yield call(
      axios.get,
      `${Urls.baseUrl}${Urls.getSettings}`,
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    const { data } = response;
    yield put(getSettingsSucceess(data));
  } catch (error) {
    yield put(getSettingsError(error?.response?.data));
    console.log(error?.response?.data);
  }
}

function* watchGeneralSettings() {
  yield takeLatest(GET_SETTINGS_STARTED, setttingsGeneralTask);
}

export default function* saga() {
  yield all([watchGeneralSettings()]);
}
