import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import AsyncStorage from "@react-native-async-storage/async-storage";

import reducers from "./reducers";
import sagas from "./sagas";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducers = persistReducer(persistConfig, reducers);

const bindMiddleware = (middleware) => {
  return applyMiddleware(...middleware);
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducers, bindMiddleware([sagaMiddleware]));
export const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export default store;
