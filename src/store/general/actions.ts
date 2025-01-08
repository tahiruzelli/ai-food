import {
  GET_SETTINGS_STARTED,
  GET_SETTINGS_ERROR,
  GET_SETTINGS_RESET,
  GET_SETTINGS_SUCCESS,
} from "./types";

//GENERAL SETTINGS
export const getSettings = (values: any) => ({
  type: GET_SETTINGS_STARTED,
  payload: values,
});

export const getSettingsSucceess = (data: any) => ({
  type: GET_SETTINGS_SUCCESS,
  payload: data,
});

export const getSettingsError = (error: any) => ({
  type: GET_SETTINGS_ERROR,
  payload: error,
});

export const getSettingsReset = () => {
  return { type: GET_SETTINGS_RESET };
};
