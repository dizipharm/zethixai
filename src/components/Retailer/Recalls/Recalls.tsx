import React, { Component } from "react";

interface RecallsProps {}

interface RecallsState {}

class RetailerRecalls extends React.Component<RecallsProps, RecallsState> {
  state = {};
  render() {
    return (
      <>
        <div className="row blocks-row mt-2">
          <div className="block-title ms-2">
            <i className="fa-regular fa-paste"></i>
            <span>Recalls Summary</span>
          </div>
          <div className="row mt-3">
            <div className="col-md-4 block-div">
              <div className="block-title">
                <i
                  className="fa-regular fa-file me-1"
                  // style="color: #c6a9ed"
                ></i>
                <span>Class I</span>
              </div>
              <div
                className="row"
                // style="border-bottom: 1px solid #c6a9ed; padding-bottom: 10px"
              >
                <div className="col-md-4 p-0 primary-stats">
                  <div className="value py-2">
                    <span>4500 </span>
                    <small className="d-block">Units</small>
                  </div>
                </div>
                <div className="col-md-8 secondary-stats">
                  <div className="block">
                    <span className="label">Femara (Letrozole) </span>
                    <span className="value">2500</span>
                  </div>

                  <div className="block">
                    <span className="label">Femara (Letrozole) </span>
                    <span className="value">2500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 block-div">
              <div className="block-title">
                <i className="fa-regular fa-file me-1"></i>
                <span>Class II</span>
              </div>
              <div
                className="row"
                // style="border-bottom: 1px solid #ffb028; padding-bottom: 10px"
              >
                <div className="col-md-4 p-0 primary-stats">
                  <div className="value py-2">
                    <span>3500 </span>
                    <small className="d-block">Units</small>
                  </div>
                </div>
                <div className="col-md-8 secondary-stats">
                  <div className="block">
                    <span className="label">Femara (Letrozole) </span>
                    <span className="value">2000</span>
                  </div>

                  <div className="block">
                    <span className="label">Femara (Letrozole) </span>
                    <span className="value">1500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 block-div">
              <div className="block-title">
                <i
                  className="fa-regular fa-file me-1"
                  // style="color: #b3c522"
                ></i>
                <span>Class III</span>
              </div>
              <div
                className="row"
                // style="border-bottom: 1px solid #b3c522; padding-bottom: 10px"
              >
                <div className="col-md-4 p-0 primary-stats">
                  <div className="value py-2">
                    <span>2500 </span>
                    <small className="d-block">Units</small>
                  </div>
                </div>
                <div className="col-md-8 secondary-stats">
                  <div className="block">
                    <span className="label">Femara (Letrozole) </span>
                    <span className="value">1500</span>
                  </div>

                  <div className="block">
                    <span className="label">Femara (Letrozole) </span>
                    <span className="value">1000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="p-3">
              <div className="block-title">
                <i className="far fa-file-alt"></i>
                <span>Recall Status</span>
              </div>
              <div className="text-center mt-5 mb-5">
                <button type="button" className="btn btn-primary btn-lg">
                  3800
                </button>

                <button type="button" className="btn btn-primary btn-lg">
                  2120
                </button>

                <button type="button" className="btn btn-primary btn-lg">
                  869
                </button>
              </div>
              <div className="text-center mt-3 mb-3 recal-status-labels">
                <span className="mb-1 budg">Class I</span>
                <span className="mb-1 pro">Class II</span>
                <span className="mb-1 class3">Class III</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3">
              <div className="block-title">
                <i className="fas fa-sort-amount-up-alt"></i>
                <span>Recall Alerts</span>
              </div>

              <div className="d-flex text-muted pt-3">
                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">Company</strong>
                    <strong className="text-gray-dark">Total Brands </strong>
                    <strong className="text-gray-dark">Recalls </strong>
                    <strong>Total Units</strong>
                  </div>
                </div>
              </div>
              <div className="d-flex text-muted pt-3">
                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">
                      Johnson & Johnson
                    </strong>
                    <span className="text-gray-dark">5 </span>
                    <span className="text-gray-dark">3 </span>
                    <span>300 Units</span>
                  </div>
                </div>
              </div>

              <div className="d-flex text-muted pt-3">
                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">Novartis</strong>
                    <span className="text-gray-dark">3 </span>
                    <span className="text-gray-dark">5 </span>
                    <span>500 Units</span>
                  </div>
                </div>
              </div>

              <div className="d-flex text-muted pt-3">
                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">AbbVie</strong>
                    <span className="text-gray-dark">4</span>
                    <span className="text-gray-dark">10 </span>
                    <span>1000 Units</span>
                  </div>
                </div>
              </div>

              <div className="d-flex text-muted pt-3">
                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">Roche</strong>
                    <span className="text-gray-dark">3 </span>
                    <span className="text-gray-dark">8 </span>
                    <span>800 Units</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="row">
            <div className="p-3">
              <div className="block-title">
                <i className="far fa-eye"></i>
                <span>Recall Status Overview</span>
              </div>
              <div className="table-responsive">
                <table className="table project-table">
                  <thead>
                    <tr>
                      <th scope="col">Manufacturer Name</th>
                      <th scope="col">Drug Name</th>
                      <th scope="col">FDA NDC CODE</th>
                      <th scope="col">Total Units In Recall</th>
                      <th scope="col">Class</th>
                      <th scope="col">Pending Units In Recall</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bristol-Myers Squibb</td>
                      <td>Fareston (Toremifene)</td>
                      <td>002-0800</td>
                      <td>10000</td>
                      <td>I</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>Johnson & Johnson</td>
                      <td>Eribulin Mesylate</td>
                      <td>002-0885</td>
                      <td>9000</td>
                      <td>II</td>
                      <td>250</td>
                    </tr>
                    <tr>
                      <td>Roche</td>
                      <td>Letrozole</td>
                      <td>002-0895</td>
                      <td>8000</td>
                      <td>I</td>
                      <td>478</td>
                    </tr>

                    <tr>
                      <td>AbbVie</td>
                      <td>Taxotere (Docetaxel)</td>
                      <td>002-0876</td>
                      <td>7000</td>
                      <td>III</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>Merck</td>
                      <td>Vinblastine Sulfate</td>
                      <td>002-0854</td>
                      <td>6000</td>
                      <td>II</td>
                      <td>800</td>
                    </tr>
                    <tr>
                      <td>Novartis</td>
                      <td>Xeloda (Capecitabine)</td>
                      <td>002-0863</td>
                      <td>5000</td>
                      <td>I</td>
                      <td>200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="my-3 p-3">
              <div className="block-title">
                <i className="far fa-flag"></i>
                <span>By Company</span>
              </div>
              <canvas id="myChart"></canvas>
            </div>
          </div>

          <div className="col">
            <div className="my-3 p-3">
              <div className="block-title">
                <i className="fas fa-capsules"></i> By Drug
              </div>
              <canvas id="myChart2"></canvas>
            </div>
          </div>

          <div className="col">
            <div className="my-3 p-3">
              <div className="block-title">
                <i className="fas fa-align-left"></i> By Units
              </div>
              <canvas
                className="my-4 w-100"
                id="myChart3"
                width="900"
                height="380"
              ></canvas>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RetailerRecalls;
