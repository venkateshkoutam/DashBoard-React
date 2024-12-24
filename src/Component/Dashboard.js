import React from "react";
import Graph from "./Graph";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4">
              <div className="card earnings-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="card-image"
                        src="/Images/GraphIcon.png"
                        alt="Earnings Icon"
                      />
                    </div>
                    <div className="col-md-8">
                      <p className="card-text">Earnings</p>
                      <h6 className="card-number">$370.4</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card spend-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="card-image"
                        src="/Images/Dollar.png"
                        alt="Spend Icon"
                      />
                    </div>
                    <div className="col-md-8">
                      <p
                        className="card-text truncate-text"
                        title="Spend this month"
                      >
                        Spend this month
                      </p>
                      <h6 className="card-spends">$642.39</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card earnings-card">
                <div className="card-body">
                  <p className="card-sales">Sales</p>
                  <h6 className="card-salesprice">$574.34</h6>
                  <p className="card-text"><img src="/Images/Precentage.png" className="precentagesales" /></p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4">
              <div className="card earnings-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="yourbalance">Your Balance</p>
                      <h6 className="card-numberbalance">$1,000</h6>

                    </div>
                    <div className="col-md-6">
                      <img
                        className="card-balance"
                        src="/Images/Flag.png"
                        alt="Flag Icon"
                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card spend-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="card-newtask"
                        src="/Images/NewTaskIcon.png"
                        alt="Spend Icon"
                      />
                    </div>
                    <div className="col-md-8">
                      <p
                        className="card-text truncate-text"
                        title="Spend this month"
                      >
                        New Tasks
                      </p>
                      <h6 className="card-number">154</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card earnings-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="card-image"
                        src="/Images/FileIcon.png"
                        alt="Earnings Icon"
                      />
                    </div>
                    <div className="col-md-8">
                      <p className="card-projects">Total Projects</p>
                      <h6 className="card-Projectnumber">2935</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Graph />
    </div>
  );
}

export default Dashboard;
