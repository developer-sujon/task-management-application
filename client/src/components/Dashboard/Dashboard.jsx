import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ApiRequest from "../../APIRequest/ApiRequest";

const Dashboard = () => {
  const dashBoardSummary = useSelector(
    (state) => state.dashboard.dashboardSummaryList,
  );

  useEffect(() => {
    ApiRequest.SetDashboardSummaryRequest();
  }, []);

  if (dashBoardSummary.length > 0) {
    return (
      <div className="container">
        <div className="row">
          {dashBoardSummary &&
            dashBoardSummary.map((item) => (
              <div
                className="col-12 col-lg-3 col-sm-6 col-md-3  p-2"
                key={item._id}
              >
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="animated fadeInUp">Total {item._id}</h5>
                    <h6 className="text-secondary animated fadeInUp">
                      {item.count}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          {["new", "canceled", "pending", "complate"].map((item, index) => (
            <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="animated fadeInUp">Total {item}</h5>
                  <h6 className="text-secondary animated fadeInUp">0</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Dashboard;
