import { faCircle, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import PageTitle from "../../../../react-components/PageTitle/PageTitle";
import { trackEventFn } from "./trackEvent";

const ChainOfCustody = ({ data, type }: any) => {
  return (
    <>
      <PageTitle title="Chain Of Custody/Geo Tracking" />
      {data?.length > 0 ? (
        <div className="techhiwwrapper">
          {data.map((d: any, i: number) => {
            let dt = trackEventFn(d);

            return (
              <div className="techhiwitem" key={i}>
                <div className="techhiwitem__leftside">
                  <div className="techhiw__iconwrapper">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="techhiw__arrow"></div>
                </div>
                <div className="techhiwitem__content d-flex justify-content-between">
                  <div className="left">
                    {type === "trace" && <h4>{dt?.status}</h4>}
                    <h4>{dt?.address}</h4>
                    <p className="techhiw__paragraph">
                      {dt?.dateTime &&
                        moment(dt?.dateTime).format("DD-MMM-YYYY - h:mm a")}
                    </p>
                    <p className="techhiw__paragraph">
                      <strong>Company: </strong>
                      {d?.updated_by?.company?.company_name}
                    </p>
                    <p className="techhiw__paragraph">
                      <strong>GLN: </strong>
                      {d?.updated_by?.company?.comapny_gln || "-"}
                    </p>
                    <p className="techhiw__paragraph">
                      <strong>Name: </strong>
                      {d?.updated_by?.first_name +
                        " " +
                        d?.updated_by?.last_name}
                    </p>
                  </div>
                  {type === "trace" && (
                    <div className="right">
                      <div className="pkg-condition">
                        <p className="mb-1 pkg-heading">
                          <strong> Package Condition</strong>
                        </p>
                        <p>
                          <span>
                            {d?.package_status === 0 && (
                              <FontAwesomeIcon
                                icon={faCircle}
                                className="success"
                              />
                            )}
                            <span
                              className={
                                d?.package_status === 0 ? "font-bold" : ""
                              }
                            >
                              Good
                            </span>
                          </span>
                          &nbsp;&nbsp;
                          <span>
                            {d?.package_status === 1 && (
                              <FontAwesomeIcon
                                icon={faCircle}
                                className="danger"
                              />
                            )}
                            <span
                              className={
                                d?.package_status === 1 ? "font-bold" : ""
                              }
                            >
                              Damaged
                            </span>
                          </span>{" "}
                          &nbsp;&nbsp;
                          <span>
                            {d?.package_status === 2 && (
                              <FontAwesomeIcon
                                icon={faCircle}
                                className="danger"
                              />
                            )}
                            <span
                              className={
                                d?.package_status === 2 ? "font-bold" : ""
                              }
                            >
                              Wrong Product
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="pkg-condition">
                        <p className="mb-1 pkg-heading">
                          <strong> Product Status</strong>
                        </p>
                        <p>
                          <span>
                            {d?.product_status === 0 && (
                              <FontAwesomeIcon
                                icon={faCircle}
                                className="success"
                              />
                            )}
                            <span
                              className={
                                d?.product_status === 0 ? "font-bold" : ""
                              }
                            >
                              Active
                            </span>
                          </span>
                          &nbsp;&nbsp;
                          <span>
                            {d?.product_status === 1 && (
                              <FontAwesomeIcon
                                icon={faCircle}
                                className="danger"
                              />
                            )}
                            <span
                              className={
                                d?.product_status === 1 ? "font-bold" : ""
                              }
                            >
                              Recalled
                            </span>
                          </span>{" "}
                          &nbsp;&nbsp;
                          <span>
                            {d?.product_status === 2 && (
                              <FontAwesomeIcon
                                icon={faCircle}
                                className="danger"
                              />
                            )}
                            <span
                              className={
                                d?.product_status === 2 ? "font-bold" : ""
                              }
                            >
                              Expired
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="pkg-condition">
                        <p className="mb-1 pkg-heading">
                          <strong> Control Condition</strong>
                        </p>
                        <p>
                          {d?.temperature}
                          <span className="temperature">o</span>c, {d?.humidity}
                          %
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="no-data">No data available</p>
      )}
    </>
  );
};

export default ChainOfCustody;
