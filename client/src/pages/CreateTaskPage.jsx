import React, { Suspense, lazy, Fragment } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";

const CreateTask = lazy(() => import("../components/CreateTask/CreateTask"));

const CreateTaskPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <CreateTask />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default CreateTaskPage;
