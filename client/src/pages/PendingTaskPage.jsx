import React, { Suspense, lazy, Fragment } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";

const PendingTask = lazy(() => import("../components/PendingTask/PendingTask"));

const PendingTaskPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <PendingTask />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default PendingTaskPage;
