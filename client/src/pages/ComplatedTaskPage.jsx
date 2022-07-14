import React, { lazy, Suspense } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";

const ComplatedTask = lazy(() =>
  import("../components/ComplateTask/ComptedTask"),
);

const ComplatedTaskPage = () => {
  return (
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
        <ComplatedTask />
      </Suspense>
    </MasterLayout>
  );
};

export default ComplatedTaskPage;
