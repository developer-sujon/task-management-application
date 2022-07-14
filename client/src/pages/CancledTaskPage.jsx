import React, { lazy, Suspense } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";

const CancledTask = lazy(() => import("../components/CancledTask/CancledTask"));

const CancledTaskPage = () => {
  return (
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
        <CancledTask />
      </Suspense>
    </MasterLayout>
  );
};

export default CancledTaskPage;
