import React, { Suspense, lazy, Fragment } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";

const UserProfile = lazy(() => import("../components/UserProfile/UserProfile"));

const ProfilePage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <UserProfile />
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default ProfilePage;
