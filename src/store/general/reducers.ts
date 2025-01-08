import {
  GET_SETTINGS_STARTED,
  GET_SETTINGS_SUCCESS,
  GET_SETTINGS_ERROR,
  GET_SETTINGS_RESET,
} from "./types";

const initialState = {
  settings: [],
  isLoading: true,
  error: null,
};

const general = (state = initialState, action: any) => {
  const { payload = {} } = action;
  switch (action.type) {
    case GET_SETTINGS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SETTINGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        settings: payload?.data,
      };
    case GET_SETTINGS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case GET_SETTINGS_RESET:
      return {
        ...state,
        settings: {},
      };

    default:
      return state;
  }
};
export default general;
