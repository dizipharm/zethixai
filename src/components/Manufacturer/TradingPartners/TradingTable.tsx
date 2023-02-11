import { faFilePdf, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";

interface tableProps {
  data: Array<any>;
  viewSingleOrderFn: any;
  acceptPartnerFn?: any;
  rejectPartnerFn?: any;
  orderType: string;
}

const TradingTable = ({
  data,
  orderType,
  viewSingleOrderFn,
  acceptPartnerFn,
  rejectPartnerFn,
}: tableProps) => {
  return (
    <>
      <table className="order-table table">
        <thead>
          <tr className="order-thead-tr">
            <th>Date of Request</th>
            <th>Entity Name</th>
            <th>Entity Type</th>
            <th>Entity Contact Details</th>
            <th>Submited Dcoumnets</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((d, i) => {
              let status;
              let company = d?.user?.company;
              let companyType;

              if (company.company_type === 1) {
                companyType = "Manufacturer";
              } else if (company.company_type === 2) {
                companyType = "Distributor";
              } else {
                companyType = company.company_type;
              }

              return (
                <tr className="" key={i}>
                  <td className="order-date">
                    {moment(d.user.order_date).format("DD-MMM-YYYY")}
                  </td>
                  <td className="order-id">{company?.company_name}</td>
                  <td className="order-total"> {companyType} </td>
                  <td className="order-placed-by">
                    {d.user.first_name} <br />
                    {d.user.email} <br />
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="phone-in-order"
                    />
                    {d.user.contact_no1}
                  </td>
                  <td className="order-address" style={{ width: "350px" }}>
                    <div>
                      Company GLN({company?.comapny_gln}) -
                      <a
                        href="https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/IOM-TIN.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faFilePdf} />
                      </a>
                    </div>

                    {/* <div>
                      Business Tax ID (1435674567) -
                      <a
                        href="https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/UK-TIN.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faFilePdf} />
                      </a>
                    </div> */}

                    <div>
                      Registration Number ({company?.regisration_no}) -
                      <a
                        href="https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/UK-TIN.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faFilePdf} />
                      </a>
                    </div>

                    <div>
                      Company Local Code ({company.company_local_code}) -
                      <a
                        href="https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/UK-TIN.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faFilePdf} />
                      </a>
                    </div>
                  </td>

                  <td className="orders-btn">
                    <button
                      className="btn btn-sm btn-info me-1"
                      onClick={() => viewSingleOrderFn(d.purchase_order)}
                    >
                      View
                    </button>

                    {orderType === "NEW" && (
                      <>
                        <button
                          className="btn btn-sm btn-success me-1"
                          onClick={() => acceptPartnerFn(d._id)}
                        >
                          Accept
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => rejectPartnerFn(d._id)}
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="order-empty-data">
              <td colSpan={6} className="text-center">
                No Records Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TradingTable;
