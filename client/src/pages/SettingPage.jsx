import React, { Suspense } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import Setting from "../components/Setting/Setting";

const SettingPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Setting />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default SettingPage;
