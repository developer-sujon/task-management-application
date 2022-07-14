import React, { Suspense, lazy, Fragment } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";

const ForgetPassword = lazy(() =>
  import("../components/ForgetPassword/ForgetPassword"),
);

const ForgetPasswordPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <ForgetPassword />
      </Suspense>
    </>
  );
};

export default ForgetPasswordPage;
