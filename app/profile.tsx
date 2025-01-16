import React from "react";
import ProfileTemplate from "../src/components/templates/Profile";
import { Provider } from "react-redux";
import store from "../src/store";

const IndexPage = () => {
  return (
    <>
      <Provider store={store}>
        <ProfileTemplate />
      </Provider>
    </>
  );
};
export default IndexPage;
