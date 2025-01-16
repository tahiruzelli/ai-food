import React from "react";
import AppTemplate from "../src/components/templates/App";
import { Provider } from "react-redux";
import store from "../src/store";

const IndexPage = () => {
  return (
    <>
      <Provider store={store}>
        <AppTemplate />
      </Provider>
    </>
  );
};
export default IndexPage;
