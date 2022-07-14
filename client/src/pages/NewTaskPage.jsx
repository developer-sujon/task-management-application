import React, { Suspense, lazy, Fragment } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";

const NewTask = lazy(() => import("../components/NewTask/NewTask"));

const NewTaskPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <NewTask />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default NewTaskPage;
