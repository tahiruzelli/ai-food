import React from "react";
import CreateReceipeTemplate from "../src/components/templates/CreateReceipe";
import { Provider } from "react-redux";
import store from "../src/store";

const IndexPage = () => {
  return (
    <>
      <Provider store={store}>
        <CreateReceipeTemplate />
      </Provider>
    </>
  );
};
export default IndexPage;
