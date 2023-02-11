import * as React from "react";

interface RecallSummaryProps {}

const RecallSummary = (props: RecallSummaryProps) => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="p-3">
            <div className="block-title">
              <i className="fas fa-sort-amount-up-alt"></i>
              <span>Accepted Returns</span>
            </div>
            <div className="d-flex text-muted pt-3">
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">60%</strong>
                  <strong className="text-gray-dark">Johnson & Johnson</strong>
                  <span>4500 Units</span>
                </div>
              </div>
            </div>

            <div className="d-flex text-muted pt-3">
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">50%</strong>
                  <strong className="text-gray-dark">Roche </strong>
                  <span>3500 Units</span>
                </div>
              </div>
            </div>

            <div className="d-flex text-muted pt-3">
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">40%</strong>
                  <strong className="text-gray-dark">Novartis</strong>
                  <span>2500 Units</span>
                </div>
              </div>
            </div>

            <div className="d-flex text-muted pt-3">
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">30%</strong>
                  <strong className="text-gray-dark">Merck</strong>
                  <span>1500 Units</span>
                </div>
              </div>
            </div>

            <div className="d-flex text-muted pt-3">
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">60%</strong>
                  <strong className="text-gray-dark">AbbVie </strong>
                  <span>4500 Units</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className="block-title">
              <i className="fas fa-sort-amount-down-alt"></i>
              <span>Rejected Returns</span>
            </div>
            <div className="d-flex text-muted pt-3">
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">60%</strong>
                  <strong className="text-gray-dark">
                    Bristol-Myers Squibb{" "}
                  </strong>
                  <span>4500 Units</span>
                </div>
              </div>
            </div>

            <div className="d-flex text-muted pt-3">
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">60%</strong>
                  <strong className="text-gray-dark">Johnson & Johnson</strong>
                  <span>4500 Units</span>
                </div>
              </div>
            </div>

            <div className="d-flex text-muted pt-3">
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">50%</strong>
                  <strong className="text-gray-dark">Roche </strong>
                  <span>3500 Units</span>
                </div>
              </div>
            </div>

            <div className="d-flex text-muted pt-3">
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">40%</strong>
                  <strong className="text-gray-dark">Novartis</strong>
                  <span>2500 Units</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <div className="my-3 p-3">
                <div className="block-title">
                  <i className="fas fa-capsules"></i> By Drug
                </div>
                <canvas
                  id="myChart2"
                  //   style="width: 100%; max-width: 600px"
                ></canvas>
              </div>
            </div>

            <div className="col-md-12">
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
        </div>
      </div>

      <div className="col-md-12">
        <div className="row">
          <div className="p-3">
            <div className="block-title">
              <i className="far fa-eye"></i>
              <span>Return Status Overview</span>
            </div>
            <div className="table-responsive">
              <table className="table project-table">
                <thead>
                  <tr>
                    <th scope="col">Manufacturer Name</th>
                    <th scope="col">Drug Name</th>
                    <th scope="col">FDA NDC CODE</th>
                    <th scope="col">Total Units Returned</th>
                    <th scope="col">Rejected/Accepted Units</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bristol-Myers Squibb</td>
                    <td>Fareston (Toremifene)</td>
                    <td>002-0800</td>
                    <td>10000</td>
                    {/* <td>
                      <span style="color: #f47920">1000</span> /
                      <span style="color: #16cb1e">9000</span>
                    </td> */}
                  </tr>
                  <tr>
                    <td>Johnson & Johnson</td>
                    <td>Eribulin Mesylate</td>
                    <td>002-0885</td>
                    <td>9000</td>
                    {/* <td>
                      <span style="color: #f47920">2000</span> /
                      <span style="color: #16cb1e">7500</span>
                    </td> */}
                  </tr>
                  <tr>
                    <td>Roche</td>
                    <td>Letrozole</td>
                    <td>002-0895</td>
                    <td>8000</td>
                    {/* <td>
                      <span style="color: #f47920">1300</span> /
                      <span style="color: #16cb1e">9300</span>
                    </td> */}
                  </tr>

                  <tr>
                    <td>AbbVie</td>
                    <td>Taxotere (Docetaxel)</td>
                    <td>002-0876</td>
                    <td>7000</td>
                    {/* <td>
                      <span style="color: #f47920">1100</span> /
                      <span style="color: #16cb1e">5500</span>
                    </td> */}
                  </tr>
                  <tr>
                    <td>Merck</td>
                    <td>Vinblastine Sulfate</td>
                    <td>002-0854</td>
                    <td>6000</td>
                    {/* <td>
                      <span style="color: #f47920">1800</span> /
                      <span style="color: #16cb1e">8300</span>
                    </td> */}
                  </tr>
                  <tr>
                    <td>Novartis</td>
                    <td>Xeloda (Capecitabine)</td>
                    <td>002-0863</td>
                    <td>5000</td>
                    {/* <td>
                      <span style="color: #f47920">1600</span> /
                      <span style="color: #16cb1e">6400</span>
                    </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecallSummary;
