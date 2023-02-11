import React, { useEffect, useState } from "react";
import { locationList } from "../../services/locationService";
import Loader from "../../common/Loder";
import PaginationWrapper from "../../common/Pagination/Pagination";

const LocationList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [locationData, setLocationData] = useState<any[]>([]);

  const locationListFn = () => {
    setIsLoading(true);
    locationList()
      .then((res) => {
        setLocationData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    locationListFn();
  }, []);

  return (
    <>
      {locationData && locationData.length > 0 ? (
        <div className="row">
          {locationData.map((item: any, i: number) => {
            return (
              <div className="col-md-6 " key={i}>
                <div className="d-flex justify-content-between card mb-4">
                  <div className="product-info card-body">
                    <div>
                      <label>Location GLN:</label>
                      <span>{item.location_gln}</span>
                    </div>
                    <div>
                      <label>Parent GLN:</label>
                      <span>{item.parent_gln} </span>
                    </div>
                    <div>
                      <label>Internal Code:</label>
                      <span>{item.internal_code} </span>
                    </div>
                    <div>
                      <label>Location Name:</label>{" "}
                      <span>{item.location_name}</span>
                    </div>
                    <div>
                      <label>Address 1:</label> <span> {item.address1} </span>
                    </div>
                    <div>
                      <label>Address 2:</label> <span> {item.address2} </span>
                    </div>
                    <div>
                      <label>Lattitude:</label> <span> {item.loc_lat}</span>
                    </div>
                    <div>
                      <label>Longitude:</label> <span> {item.loc_long}</span>
                    </div>
                    <div>
                      <label>Active:</label>{" "}
                      <span> {item.is_active === true ? "true" : "false"}</span>
                    </div>
                    <div>
                      <label>Physical:</label>{" "}
                      <span>
                        {" "}
                        {item.is_physical === true ? "true" : "false"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty-data">
          <p>No Data available</p>
        </div>
      )}

      {isLoading && <Loader />}

      {/* <PaginationWrapper
        totalRecords={totalRecords}
        pageLimit={10}
        pageNeighbours={2}
        onPageChanged={onPageChanged}
        skipRecords={skipRecords}
      /> */}
    </>
  );
};

export default LocationList;
