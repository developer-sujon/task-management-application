import React, { Suspense, lazy, Fragment } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import FormValidation from "../helper/FormValidation";
const AllTask = lazy(() => import("../components/AllTask/AllTask"));

const AllTaskPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <AllTask />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default AllTaskPage;
