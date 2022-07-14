import React from "react";
import { useSelector } from "react-redux";

const FullScreenLoader = () => {
  const loader = useSelector((state) => state.loader.loading);

  return (
    <div className={loader ? "LoadingOverlay" : "d-none"}>
      <div className="Line-Progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
};

export default FullScreenLoader;
